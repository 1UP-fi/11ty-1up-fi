import { feedPlugin as pluginRSS } from "@11ty/eleventy-plugin-rss";
import { minify } from 'minify';
import * as sass from "sass";
import fs from "fs";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownItFootnote from "markdown-it-footnote";
import path from "node:path";
import pluginHighLight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginTOC from "eleventy-plugin-toc";
import ts from "typescript";
import YAML from "yaml";

const site = YAML.parse(fs.readFileSync('./src/_data/site.yml', 'utf8'));

export default function (eleventyConfig) {
    // Options for feed
    const feedConfig = {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: site.lang,
			title: site.title,
			subtitle: site.description,
			base: site.url,
			author: {
                // Use the site title since this is for the entire site
				name: site.title
			}
		}
	};
    eleventyConfig.addPlugin(pluginRSS, feedConfig);

    // Add table of contents and syntax highlighting support
    eleventyConfig.addPlugin(pluginTOC);
    eleventyConfig.addPlugin(pluginHighLight);

    // Define Markdown behavior
    eleventyConfig.amendLibrary("md", md => {
        // Add some Markdown extensions
        md.use(markdownItAnchor);
        md.use(markdownItAbbr);
        md.use(markdownItAttrs);

        md.use(markdownItFootnote);
        // Define custom container for footnotes
        md.renderer.rules.footnote_block_open = () => "<footer><h2 id='footnotes'>Footnotes</h2><ol class='footnotes-list'>";
        // Replace character used for footnote backlinks
        let anchorRenderer = md.renderer.rules.footnote_anchor;
        md.renderer.rules.footnote_anchor = (...args) => anchorRenderer(...args).replace('\u21a9\uFE0E', '^');
    });

    // Add support for taking an excerpt of a post
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!--endx-->",
    });

    // Define collections
    eleventyConfig.addCollection("posts", collectionApi => {
        return collectionApi.getFilteredByGlob("src/posts/*.md");
    });
    eleventyConfig.addCollection("tools", collectionApi => {
        return collectionApi.getFilteredByGlob("src/tools/*.md");
    });

    // Parse YAML into data
    eleventyConfig.addDataExtension("yml", (contents) => YAML.parse(contents));

    // Parse YAML into JSON
    eleventyConfig.addExtension("yml", {
        outputFileExtension: "json",

        compile: async function (inputContent) {
            return async () => {
                return JSON.stringify(YAML.parse(inputContent));
            };
        },
    });

    // Parse SCSS into CSS and minify
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        useLayouts: false,

        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);

            if (parsed.name.startsWith("_")) return;

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || ".",
                    this.config.dir.includes,
                ],
                style: "compressed"
            });

            this.addDependencies(inputPath, result.loadedUrls);

            return async () => {
                return result.css;
            };
        },
    });

    // Parse TS into JS and minify
    eleventyConfig.addExtension("ts", {
        outputFileExtension: "js",
        compile: async function (inputContent) {
            const result = ts.transpileModule(inputContent, {
                compilerOptions: {
                    module: ts.ModuleKind.Preserve,
                    target: ts.ScriptTarget.ES2022,
                    strict: true,
                    inlineSourceMap: true,
                    removeComments: true
                }
            });
            return async () => {
                return minify.js(result.outputText);
            };
        }
    });

    // Minify HTML
    eleventyConfig.addTransform("htmlmin", async function (content) {
		// String conversion to handle `permalink: false`
		if ((this.page.outputPath || "").endsWith(".html")) {
			return await minify.html(content);
		}

		return content;
	});

    // Pass some files and folders through as they are
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    eleventyConfig.addTemplateFormats(["ts", "scss", "yml", "svg"]);

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        }
    };
};
