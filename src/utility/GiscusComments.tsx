"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
    return (
        <Giscus
            id="comments"
            repo="YOUR_USERNAME/YOUR_REPO"
            repoId="YOUR_REPO_ID"
            category="Reforms Discussion"
            categoryId="YOUR_CATEGORY_ID"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
        />
    );
}