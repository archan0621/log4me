# Archan's Log4Me

마크다운으로 글을 쓰고 정적 HTML로 빌드하는 작은 블로그입니다.

## 글 쓰기

`src/posts/` 아래에 `.md` 파일을 만듭니다.

```md
---
title: "글 제목"
date: 2026-05-02
---

본문을 마크다운으로 작성합니다.
```

파일 이름이 글 주소가 됩니다. 예를 들어 `src/posts/my-note.md`는 `/posts/my-note/`로 만들어집니다.

## 명령어

```sh
npm run build
npm run dev
```

빌드 결과는 `_site/`에 생성됩니다.
