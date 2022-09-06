# CalcImagesTotalHeight


## Contents

1. Introduction
2. Mandatory Part
3. Bonus Part
4. Turn-in and peer Evaluation

## Chaper 1. Introduction


우리는 웹 서비스  개발 시에 다양한 비동기 처리가 필요한 상황을 마주합니다. 이번 과제에서는 이미지 소스에 관한 데이터가 담긴 배열이 주어졌을 때, 해당 이미지 리소스를 fetch 해오고, 이미지의 height 총 합을 구해야합니다. 매우 간단하죠?

하지만 여러분은 비동기 처리 중 발생되는 에러 핸들링에 관해 고민해볼 부분이 많이 존재합니다.

## Chaper 2. General Instructions

- 이 프로젝트는 완료 후 동료평가를 권장합니다.
- ECMAscript 2019 기준으로 코드를 작성합니다.
- 표준 Web API 기능을 사용할 수 있습니다.

## Chapter 2. Mandatory Part


여러분이 만들어야 하는 것은 `CalcImagesTotalHeight`  함수입니다.

해당 함수의 기능명세는 다음과 같습니다.

| Function name | CalcImagesTotalHeight                            |
| ------------- | ------------------------------------------------ |
| Prototype     | `(imgs: ImageInfo[]) ⇒ number`                     |
| Parameters    | imgs: ImageInfo 타입의 데이터 배열입니다.                   |
| Types         | `type ImageInfo = { name: string, url: string }` |

- 모든 이미지의 height 사이즈 합계를 반환해야 합니다.
- 만약 이미지 정보를 가져오는데에 실패하였다면, 이미지 fetching을 중단해야합니다. ( 더 이상 Request를 발생시키면 안됩니다.)
- 이미지 정보를 가져오는데에 실패하였다면, `new Error(‘Image fetching failed’)` 에러를 Throw 합니다.
