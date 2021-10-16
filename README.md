# Junki's Portfolio

개발자로서 걸어온 길을 기록하고 앞으로의 개발에 참고하기 위한 프로젝트 입니다.

# 접근 URL

http://junki-kim.com/

# 사용 기술

- Backend
  - JavaScript(ES6)
  - Node.js_v14.18.0
  - Express_v4.17.1
  - MongoDB_v4.2
- Frontend
  - JavaScript(ES6)
  - React
- DevOps
  - AWS(EC2)
  - Docker_v20.10.8
  - Docker-compose_v2.0.0
  - Git, Github

# TroubleShooting

1. 새로고침 시, 404에러 발생

- SPA (Single Page Applications)는 일반적으로 웹 브라우저에서 액세스 할 수있는 하나의 색인 파일(index.html)만 사용합니다. 그런 다음 HTML5 히스토리 API를 사용하여 JavaScript를 사용하여 애플리케이션의 탐색을 일반적으로 처리 합니다.
- 이로 인해 사용자가 새로 고침 버튼을 누르거나 방문 페이지 이외의 페이지에 직접 액세스 /help하거나 /help/online 웹 서버가 색인 파일을 무시하여이 위치에서 파일을 찾을 때 문제가 발생합니다. 응용 프로그램이 SPA이므로 웹 서버는 파일을 검색하지 못하고 404- 찾을 수 없음 메시지를 사용자에게 반환합니다.
- https://darrengwon.tistory.com/245

```
// 해결 코드(* route 가장 아래에 위치해야 함, 다른 routing을 다 먹을 수 있기 )
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
```

2. 화면 버벅임(내용 확인 중)

# What's Next

더 나은 포트폴리오를 만들기 위해 수행할 것들 입니다.

1. TypeScript 적용

- Type 지정을 통해 타입으로 인한 버그를 사전에 막기 위함

2. 관리자 화면 개발

- 현재는 Database에 직접 입력하여 사용에 불편이 있음
