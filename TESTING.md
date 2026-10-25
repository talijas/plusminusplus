# Validation

Checked on 25 October 2026 using Node.js with Web Crypto and simulated browser storage:

- JavaScript syntax and Croatian decimal amount parsing.
- Valid and invalid calendar dates.
- AES-GCM encrypted save and backup decryption round trip.
- Rejection of an incorrect password.
- Large backup encoding (fixed the original spread-argument size limit).
- Monthly summary rendering, transaction editing/deletion, and locking.
- Service worker asset installation and offline navigation/icon responses with simulated network failure.
- All assets referenced by the service worker exist.

Full browser tests could not run in this session: Chrome could not launch, and the app preview could not reach the local server. Android/iOS installation, real browser offline reopening, file download/import dialogs, and visual layout still need a real-device check. This is a personal-use web prototype, not an APK or an independently audited commercial release.

## Quick check after publishing

1. Create a wallet with a test password of at least 10 characters.
2. Add income and expenses, edit one, and set a monthly budget.
3. Download an encrypted backup. Lock and unlock the wallet.
4. Export a CSV and check the amounts.
5. Wait until the footer says “Spremno za offline rad”, go offline, and reopen the site.
6. Import the backup and verify the restored entries.

Data is local to the current browser profile. Keep encrypted backups; there is no password recovery or automatic device sync.
