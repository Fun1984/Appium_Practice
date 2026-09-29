import { actions } from "../helpers/actions"
import onboardingLoc from "../locators/onboarding.loc"
import onboardingPage from "../pages/onboarding.page"

describe('온보딩 테스트', () => {
    it('성별과 이름 넣기', async () => {
        await actions.type(onboardingPage.nameInputV2, '오토봇')
        // await onboardingPage.setName('오토봇')
        await onboardingPage.selectGenderV2(onboardingLoc.female)
        // await actions.verifyElementText(onboardingPage.nameInputV2, '오토봇') //correct
        await actions.verifyElementText(onboardingPage.nameInputV2, '봇') //incorrect
    })
})