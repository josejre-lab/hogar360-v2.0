# Built-in Forge API Access Note

The Hogar360 project has access to Manus-provided built-in Forge API environment variables inside the managed project runtime. These are configured by the platform and should not be copied into public code or shared in chat.

The following account-specific points require confirmation from Manus Support at https://help.manus.im:

| Question | Why support must confirm it |
| --- | --- |
| Whether the user’s current free Manus plan permits Forge API use | Plan entitlements can vary and may change over time. |
| Which Forge API capabilities are available | Availability may differ by account, project, or feature. |
| Rate limits, quotas, and usage restrictions | These are account and service policy details. |
| Whether an API key can be issued for external hosting or export | Built-in project runtime access does not imply portable external credentials. |
| Whether external API calls have separate billing or require an upgrade | This cannot be inferred safely from the project’s injected environment variables. |

Do not expose `BUILT_IN_FORGE_API_KEY` or other injected secrets in source archives, frontend code, screenshots, or public repositories. The portable Hogar360 media bundle is independent of Forge API access and can be uploaded to another hosting provider without requiring a Forge API key.
