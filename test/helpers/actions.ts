import { ChainablePromiseElement } from "webdriverio";
import { assert } from 'chai'
async function type(element: ChainablePromiseElement, text: string) {
    
    await element.waitForExist()// UI요소가 특정 상태가 될 떄까지 기다리는 동작 추가
    await element.setValue('') //입력 필드를 새로 초기화해서 입력
    await element.setValue(text) //오류없이 입력 가능하게 함(찝힘 방지)

}

// UI가 예상대로 작동하는 지 확인
// getText == targetText와 같은 지 확인 
async function verifyElementText(element: ChainablePromiseElement, targetText: string) {
    const eleText = await element.getText()

    //chai 검증 :: UI요소 정보와 두번쨰 string이 불일치 시, 3번째 문장 출력
    assert.equal(eleText, targetText, `"${eleText}"와 "${targetText}"는 같지 않습니다!`)
}

export const actions = {
    type,
    verifyElementText
}