# plusminusplus

A simple personal expense tracker with a Croatian interface,
a white and light-blue theme, and encrypted local storage.

## Features

- Local password-protected wallet
- Income and expense tracking in EUR
- Categories, dates, notes, editing, and deletion
- Monthly summaries and spending limits
- Search and transaction filtering
- Encrypted backup export and restore
- Monthly CSV export
- Automatic locking after five minutes of inactivity
- Offline access after the first successful online visit

## Run locally

Open `index.html` in a modern browser.

If your browser does not support Web Crypto when opening local files,
serve the project from localhost:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080.

Service worker registration is enabled on HTTPS and localhost.
Opening the downloaded HTML file also works offline in browsers
that support the required APIs for local files.

## Upload to GitHub and publish

1. Extract the ZIP on your computer.
2. Create a repository named `plusminusplus` on GitHub (public if using GitHub Free).
3. Choose **Add file → Upload files**. Upload the CONTENTS of this folder, including `icons`, directly to the repository root. Do not upload the ZIP or an enclosing `plusminusplus` folder.
4. Commit the files to `main`.
5. Open **Settings → Pages**.
6. Select **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
7. Wait for deployment, then open the site link displayed in Pages.

No build command, package installation, or custom workflow is required.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Visit once online. After unlocking, check the footer says “Spremno za offline rad”.
You can then reopen the same site offline. In supported browsers, use Install app or Add to Home Screen.

## Data and privacy

Transactions and budgets are encrypted using AES-256-GCM.
The encryption key is derived from the password using
PBKDF2-SHA-256 with 600,000 iterations and a random salt.

The application has no backend, analytics, or third-party libraries.
The hosting provider receives normal requests when the site is
visited online.

Wallet data stays in the current browser profile and does not
automatically sync across devices.

There is no password recovery.

Clearing browser storage, using private browsing, changing browsers,
or moving to another domain can make the wallet unavailable.
Download encrypted backups regularly.

CSV exports are not encrypted.

Use a dedicated hosting origin for sensitive financial data.
GitHub Pages projects belonging to the same account can share an
origin; other scripts running on that origin should be trusted.

## Backups

Use “Preuzmi šifriranu kopiju” to download a complete encrypted backup.

Use “Uvezi kopiju” to restore it. The original backup password is
required. Restoring replaces the current wallet.

## Development status

Personal-use web prototype. See TESTING.md for the checks performed on the packaged version.

Before commercial release, test transaction handling, encrypted
backup restoration, storage failures, offline behavior, browser
compatibility, and accessibility. Obtain an independent security review.

## License

No open-source license has been granted.
All rights reserved by the applicable copyright holder.
