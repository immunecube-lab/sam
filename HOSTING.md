# 호스팅 기록

- 호스팅 제공자: Cloudflare
- 서비스: Workers Static Assets / Workers Builds
- GitHub 저장소: https://github.com/immunecube-lab/sam
- 프로덕션 브랜치: `main`
- 프로젝트 이름: `sam`
- 프로젝트 경로: `sammyeongjang`
- 빌드 명령어: `npm run build`
- 배포 명령어: `npx wrangler deploy --assets ./dist --name sam --compatibility-date 2026-07-18`
- 빌드 결과 폴더: `dist`
- 자동 배포: GitHub `main` 브랜치에 푸시하면 Cloudflare에서 빌드 및 배포
- 기록일: 2026-07-18

## 공개 주소

Cloudflare의 첫 배포가 완료된 후 발급된 `workers.dev` 주소를 여기에 기록한다.

