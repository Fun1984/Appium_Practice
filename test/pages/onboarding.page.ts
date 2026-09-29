//1. 온보딩 페이지에 관한 셀렉터를 포함한 엘레멘트
    // Getter
//2. 온보딩 페이지에 관한 커스텀 메소드
import { selectors } from '../helpers/selectors'
import onboardingLoc from '../locators/onboarding.loc'

class OnboardingPage {

    get appTitleV2() {
        return selectors.getByText(onboardingLoc.appTitle)
    }
    get nameInputV2() {
        return selectors.getById(onboardingLoc.nameInput)
    }

    async selectGenderV2(gender = onboardingLoc.female) {
        await selectors.getByText(gender).click()
    }


    get appTitle() {
        return $(`//*[@text="${onboardingLoc.appTitle}"]`) //ios의 경우, content-desc 대신 name을 씀
    }

    // testID
    get nameInput() {
        return $(`//*[@resource-id="${onboardingLoc.nameInput}"]`)
        // return $(`~${onboardingLoc.nameInput}`)
    }

    async selectGender(gender: string = onboardingLoc.female) {
        await $(`//*[@content-desc="${gender}"]`).click()
    }

    // 이름 요소에 이름을 넣기 
    async setName(name: string) {
        await this.nameInput.setValue(name)
        // return $(`~${onboardingLoc.nameInput}`).addValue(name)
    }    
}

export default new OnboardingPage()