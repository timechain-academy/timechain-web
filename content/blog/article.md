---
layout: article
---

# Markdown Article

In this article, the sample content is rendered by markdown.css.

The content source is in a markdown file called **content/article.md**.
The display logic is in **pages/blog.vue** and is referenced within by the following code:  

```js
<ContentDoc path="/blog/article" class="prose text-left" />
```

Some Formatting in markdown.css needs to be updated. This is a start but it is incomplete for dark/light switching and some format auto-conversion 

## Header 2 link and code demo

A [rich text link](/) will be **rendered** by the component.

```md
I am using a :github-button in the middle of a paragraph. 
This is markdown, with 3 backticks
```

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
possimus adipisci distinctio alias voluptatum blanditiis laudantium.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
possimus adipisci distinctio alias voluptatum blanditiis laudantium.


this is a page in markdown using the content module this is a page in markdown using the content modulethis is a page in markdown using the content modulethis is a page in markdown using the content module. this is a page in markdown using the content modulethis is a page in markdown using the content modulethis is a page in markdown using the content module

### Header 3

> Blockquote 

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
possimus adipisci distinctio alias voluptatum blanditiis laudantium.

# Header 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
possimus adipisci distinctio alias voluptatum blanditiis laudantium.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
possimus adipisci distinctio alias voluptatum blanditiis laudantium.
Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.

## Header 2

1. list item 1
2. list item 2 
3. list item 3

## Header two

---

