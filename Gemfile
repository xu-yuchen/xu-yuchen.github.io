source "https://rubygems.org"

# --- Local preview only -------------------------------------------------
# GitHub Pages builds and deploys this site server-side on push, using its
# own pinned toolchain — so this Gemfile only affects `jekyll serve` on your
# machine. We use a modern Jekyll here because it supports current Ruby
# (the github-pages metagem pins an old Jekyll that breaks on Ruby 3.4+).
# The site relies on nothing GitHub-Pages-specific: only the two plugins
# below, both of which GitHub Pages also supports.
gem "jekyll", "~> 4.4"
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"

# Required to run `jekyll serve` on Ruby 3.0+ (WEBrick was unbundled from stdlib).
gem "webrick", "~> 1.9"
