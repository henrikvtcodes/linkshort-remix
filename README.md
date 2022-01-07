# `linkshort` Version 2
This is the repository for the second version of my cloudflare-based link shortener. The original one can be found [here](https://github.com/henrikvtcodes/linkshort) and is programmed using vanilla JS, a basic router called `itty-router` and uses Workers KV as its persistent storage.

### What's the Stack
This new version will be much more feature rich and is built with:
- **Remix**: A brand new SSR-focused React framework which I am super exicted to work with.
- **Workers KV**: There's no reason to change this; it's imperceptibly fast and super simple.  

In the future, I can also see myself adding more to this. Most likely a simple authentication system, more feature-rich persistent db, and maybe some socket.io action.

#### Why a new version? Why Remix?
There's one big reason that I decided to do this: flexibility. linkshort v1 is plenty fast, but I always wanted to be able to add extra features like React pages with realtime features, a simple api route for modifying available shortlinks, and maybe even a mini dashboard of sorts.  
I'd been idly researching ways to hack together something to support the aforementioned features but when I saw the pre-announcement of remix generating buzz on dev-twitter, I knew on the spot it was perfect. While I love Next.js, it's definitely too ***thicc*** for this project. I feel that the combination of speed provided by Cloudflare's platform and the flexibility of a great new framework like Remix suporting Workers out of the box exactly fits the *modus operandi* of this project.