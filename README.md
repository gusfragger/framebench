# framebench

A domain specific AI benchmark that evaluates language models on fighting game
(FGC) terminology, frame data, mechanics, domain jargon, and ambiguous concepts.

## Architecture

```mermaid
flowchart TD
    subgraph Curator ["Curator (local)"]
        QB[("Question Bank\n/runner/questions/")]
        RUNNER["Runner\n(Python / uv)"]
    end

    OR["OpenRouter API"]
    RESULTS[["results.json"]]
    GITHUB[("GitHub")]

    subgraph Site ["Site (Vercel edge)"]
        NEXT["Next.js\n(static export)"]
        subgraph Pages
            LB["/ Leaderboard"]
            CMP["/comparison"]
            METH["/methodology"]
            ABT["/about"]
        end
    end

    VISITOR["Visitor (browser)"]

    QB --> RUNNER
    RUNNER -->|"query models\n(temp=0, no sys prompt)"| OR
    OR -->|"responses"| RUNNER
    RUNNER -->|"grade + write metrics"| RESULTS
    RESULTS --> GITHUB
    GITHUB -->|"webhook → build"| NEXT
    NEXT --> Pages
    VISITOR --> Pages
```

The question bank is kept private to prevent answer leakage. The site is purely
static, no server runtime, no API calls from the browser. Results are updated by
committing a new `results.json` and letting Vercel redeploy.
