import { ChainablePromiseElement } from "webdriverio";
import { assert } from 'chai'
import { selectors } from "./selectors";
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

async function waitFor(element: ChainablePromiseElement, timeout = 10000) {
    await element.waitForDisplayed({ timeout })
}

async function isVisible(element: ChainablePromiseElement, targetBool = true) {
    const visible = await element.isDisplayed()

    // chai 검증
    assert.equal(visible, targetBool) //targetBool로 보여야한다. 보이지않아야한다 설정 가능
}

async function isSelected(element: ChainablePromiseElement, targetBool = true) {
    const selected = await element.isSelected()

    // chai 검증
    assert.equal(selected, targetBool)
}

async function isEnabled(element: ChainablePromiseElement, targetBool = true) {
    const enabled = await element.isEnabled() // ture 나 false 리턴

    assert.equal(enabled, targetBool)
}

async function tap(element: ChainablePromiseElement) {
    await element.click()
}

async function dismissKeyboard(text='Return') {
    if (driver.isIOS) {
        await tap(selectors.getByTextV2(text))
    } else {
        await driver.hideKeyboard()
    }
}

export const actions = {
    type,
    verifyElementText,
    waitFor,
    isVisible,
    isSelected,
    isEnabled,
    tap,
    dismissKeyboard
}