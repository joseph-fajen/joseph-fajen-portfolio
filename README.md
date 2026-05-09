# Portfolio (Mintlify)

Technical writing portfolio built with [Mintlify](https://mintlify.com).

## Local Development

```bash
# Start preview server
cd ~/git/portfolio-mintlify
mintlify dev

# Browser opens at http://localhost:3333
# Edit .mdx files, save, browser auto-refreshes
# Ctrl+C to stop
```

## File Structure

| File | Purpose |
|------|---------|
| `docs.json` | Nav structure, colors, links |
| `index.mdx` | Homepage |
| `about.mdx` | Your story |
| `resume.mdx` | Resume page |
| `samples/*.mdx` | Writing samples |
| `projects/*.mdx` | Project deep-dives |

When adding/removing/renaming pages, update `docs.json` navigation to match.

## Useful Commands

```bash
mintlify dev              # Start local preview
mintlify dev --port 3333  # Use specific port
mintlify broken-links     # Check for dead links
```

## Deployment (when ready)

1. Push to GitHub
2. Sign up at https://mintlify.com (free Hobby plan)
3. Dashboard → New Project → Connect repo
4. Auto-deploys on every push to main

Optional: Add custom domain via Dashboard → Settings → Custom Domain (CNAME to `hosting.mintlify.com`)
