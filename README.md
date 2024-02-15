~~# Stead BDD Creater For Figma Plugin



### 데이터 형태

```typescript
  const payload = {
    title: '',
    url: '',
    gwt: [
      {
        given: {
          title: '',
          item: '',
        },
        when: {
          title: '',
          items: [
            {
              item: '',
              subItems: [],
            },
          ],
        },
        then: {
          title: '',
          items: [
            {
              item: '',
              subItems: [],
            },
          ],
        },
      },
    ],
   }
```

---

### Figma for plugin 개발 및 유지보수 방법

1. Dependencies를 설치한다.

```bash
$ yarn install
```

2. 파일이 변경될 때 감지하기 위해 `yarn watch`를 실행하거나, `build`를 위하 `yarn build`를 한다.

```bash
$ yarn watch or yarn build
```

4. 피그마 개발 모드가 준비된다.

---

### Figma for plugin 사용 방법

1. Figma 데스크톱 앱 실행

2. Design Mode에서, 마우스 오른쪽 버튼을 눌러 `Plugins`으로 이동

3. `In development` 섹션에서 (+) 아이콘으로 이동한 후, `Import from manifest` 실행

   > git을 이용하여 받지 않은 사용자는 import시, `yarn build`를 이용하여 추출된 `dist`폴더와 `manifest.json`을 한 폴더에 넣고 `import`를 진행한다.
4. `manifest.json`을 선택하여 `import`

5. `import`된 `plugin`을 실행한다.

---~~
