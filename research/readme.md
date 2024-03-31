# TVer Research

## TL;DR

```bash
curl 'https://edge.api.brightcove.com/playback/v1/accounts/5102072603001/videos/ref%3Aknight-scoop_episode_code_18887' \
-H 'Accept: application/json;pk=BCpkADawqM3ZdH8iYjCnmIpuIRqzCn12gVrtpk_qOePK3J9B6h7MuqOw5T_qIqdzpLvuvb_hTvu7hs-7NsvXnPTYKd9Cgw7YiwI9kFfOOCDDEr20WDEYMjGiLptzWouXXdfE996WWM8myP3Z' | jq
```

```json
{
  "thumbnail": "https://cf-images.ap-northeast-1.prod.boltdns.net/v1/static/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/ec525f71-fcd2-4854-a6a6-19b9bb2add1f/160x90/match/image.jpg",
  "thumbnail_sources": [
    {
      "src": "https://cf-images.ap-northeast-1.prod.boltdns.net/v1/static/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/ec525f71-fcd2-4854-a6a6-19b9bb2add1f/160x90/match/image.jpg"
    }
  ],
  "description": "今週も３つのご依頼に応えて笑いを届けます！\n\n▽真栄田探偵がトラウマになった１５歳女子\n▽結婚の挨拶でモヤっと…父に夫を殴ってほしい！\n▽プロレス斎藤選手に告白したい４５歳",
  "tags": [],
  "cue_points": [
    {
      "id": "6570537130800",
      "name": "Pre-roll",
      "type": "AD",
      "time": 0,
      "metadata": "",
      "force_stop": false
    },
    {
      "id": "7385141390080",
      "name": "Mid-roll1",
      "type": "AD",
      "time": 55,
      "metadata": "",
      "force_stop": false
    },
    {
      "id": "6240745486103",
      "name": "Mid-roll2",
      "type": "AD",
      "time": 1070,
      "metadata": "",
      "force_stop": false
    },
    {
      "id": "7331935147613",
      "name": "Mid-roll3",
      "type": "AD",
      "time": 1856,
      "metadata": "",
      "force_stop": false
    },
    {
      "id": "5248421798187",
      "name": "Mid-roll4",
      "type": "AD",
      "time": 2564,
      "metadata": "",
      "force_stop": false
    }
  ],
  "custom_fields": {
    "program_category": "variety",
    "programid": "knight-scoop"
  },
  "account_id": "5102072603001",
  "sources": [
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "3",
      "src": "http://manifest.prod.boltdns.net/manifest/v1/hls/v3/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfMzk3MDhkYmM0NDA5ODU1MzBlMmRhZTU1NTI3NTdjZWRkMGE1NGVkNWZiNGZmNTZiYjM3NDJiNDQ1NTQ1NmFkMQ%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "3",
      "src": "https://manifest.prod.boltdns.net/manifest/v1/hls/v3/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfMzk3MDhkYmM0NDA5ODU1MzBlMmRhZTU1NTI3NTdjZWRkMGE1NGVkNWZiNGZmNTZiYjM3NDJiNDQ1NTQ1NmFkMQ%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "4",
      "src": "http://manifest.prod.boltdns.net/manifest/v1/hls/v4/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfNGY0ZDAxYjIyNWVmZDNlMjdkNTMxMWIwZWRkZGM2ZTcyMDA1NWUzYzg1MGE1ZjA1YjY3YWZkODQ4MjZkNWE2Yg%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "4",
      "src": "https://manifest.prod.boltdns.net/manifest/v1/hls/v4/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfNGY0ZDAxYjIyNWVmZDNlMjdkNTMxMWIwZWRkZGM2ZTcyMDA1NWUzYzg1MGE1ZjA1YjY3YWZkODQ4MjZkNWE2Yg%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "5",
      "src": "http://manifest.prod.boltdns.net/manifest/v1/hls/v5/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfYWM5MDU3ZWU0YjVmMzk0N2ZhNmFlNTZjOTQ4MTJjNTIzMmM4MWRlMzY3NzA0NzU1MjI4N2IxYmRmNWZiMDFmYg%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "ext_x_version": "5",
      "src": "https://manifest.prod.boltdns.net/manifest/v1/hls/v5/aes128/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/10s/master.m3u8?fastly_token=NjYyZGVlYmFfYWM5MDU3ZWU0YjVmMzk0N2ZhNmFlNTZjOTQ4MTJjNTIzMmM4MWRlMzY3NzA0NzU1MjI4N2IxYmRmNWZiMDFmYg%3D%3D",
      "type": "application/x-mpegURL"
    },
    {
      "codecs": "avc1,mp4a",
      "profiles": "urn:mpeg:dash:profile:isoff-live:2011",
      "src": "http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/2s/manifest.mpd?fastly_token=NjYyZGVlYmFfMzBkNGVjODkwM2QwOTAyYWUyODM4ZjExOWFlOTU4MDg2MTYxOGI3YjEwMzAxNjdiMjhiZjJjNzc3ZjgyOTIxZA%3D%3D",
      "type": "application/dash+xml"
    },
    {
      "codecs": "avc1,mp4a",
      "profiles": "urn:mpeg:dash:profile:isoff-live:2011",
      "src": "https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/2s/manifest.mpd?fastly_token=NjYyZGVlYmFfMzBkNGVjODkwM2QwOTAyYWUyODM4ZjExOWFlOTU4MDg2MTYxOGI3YjEwMzAxNjdiMjhiZjJjNzc3ZjgyOTIxZA%3D%3D",
      "type": "application/dash+xml"
    }
  ],
  "name": "探偵！ナイトスクープ 3月29日(金)放送分 過酷すぎる愛の告白や夫への立腹を晴らす破天荒な方法など、女性陣の激しい熱情がほとばしる！？",
  "reference_id": "knight-scoop_episode_code_18887",
  "long_description": null,
  "duration": 2571115,
  "economics": "AD_SUPPORTED",
  "text_tracks": [
    {
      "id": null,
      "account_id": "5102072603001",
      "src": "http://manifest.prod.boltdns.net/thumbnail/v1/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/25803bc9-d37f-43fb-9d19-0947c00b719e/thumbnail.webvtt?fastly_token=NjYyZGVlYmFfMGNhOTA4NTQ4MDYzZmMyMTRjZmFmYWJmMDkzZWI4YzM0YTA1ZDhhOWRlNTVkMzc1MThhOTRlYjA1NjA1MTdjNw%3D%3D",
      "srclang": null,
      "label": "thumbnails",
      "kind": "metadata",
      "mime_type": "text/webvtt",
      "asset_id": null,
      "sources": null,
      "default": false,
      "width": 384,
      "height": 216,
      "bandwidth": 242
    },
    {
      "id": null,
      "account_id": "5102072603001",
      "src": "https://manifest.prod.boltdns.net/thumbnail/v1/5102072603001/6fc0e5d0-2a20-431b-838a-250cc86ea625/25803bc9-d37f-43fb-9d19-0947c00b719e/thumbnail.webvtt?fastly_token=NjYyZGVlYmFfMGNhOTA4NTQ4MDYzZmMyMTRjZmFmYWJmMDkzZWI4YzM0YTA1ZDhhOWRlNTVkMzc1MThhOTRlYjA1NjA1MTdjNw%3D%3D",
      "srclang": null,
      "label": "thumbnails",
      "kind": "metadata",
      "mime_type": "text/webvtt",
      "asset_id": null,
      "sources": null,
      "default": false,
      "width": 384,
      "height": 216,
      "bandwidth": 242
    }
  ],
  "published_at": "2024-03-29T06:48:17.773Z",
  "created_at": "2024-03-29T06:48:17.781Z",
  "updated_at": "2024-03-29T07:26:51.268Z",
  "offline_enabled": false,
  "link": null,
  "id": "6349928406112",
  "ad_keys": null
}
```

## PK?
pk=はpolicy keyの略で、Brightcoveの動画プレイヤーの設定を取得するためのキー。
https://players.brightcove.net/5102072603001/FUe6XFQPOb_default/index.min.js
にハードコーディングされている。


```bash
curl https://players.brightcove.net/5102072603001/FUe6XFQPOb_default/index.min.js | sed -n 's/.*policyKey:"\([^"]*\)".*/\1/p'
```

js:
```js
const regex = /(?:policyKey:"|policyKey\:")([^\"]+)/;
```

で取得可能。

2024/3/31時点でのpolicy keyは、

`BCpkADawqM3ZdH8iYjCnmIpuIRqzCn12gVrtpk_qOePK3J9B6h7MuqOw5T_qIqdzpLvuvb_hTvu7hs-7NsvXnPTYKd9Cgw7YiwI9kFfOOCDDEr20WDEYMjGiLptzWouXXdfE996WWM8myP3Z`