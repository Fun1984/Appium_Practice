import { actions } from "../helpers/actions"
import { selectors } from "../helpers/selectors"
import onboardingLoc from "../locators/onboarding.loc"
import onboardingPage from "../pages/onboarding.page"

describe('온보딩 테스트', () => {
    //빈화면 테스트
    it('빈 화면 검증', async () => {
        //모든 요소 있는 지 확인
        await onboardingPage.verifyOnboardingPage()

        // empty state 화면 검증하기
        await onboardingPage.verifyEmptyState()
        
        
    })
    
    //로그인 실패
    it ('로그인 실패 검증', async() => {
        

        // 이름만 입력 > 저장 > 온보딩 스크린에 머물러 있음 + 홈탭에 도착 안함
        await onboardingPage.setName('오토봇')
        await onboardingPage.tapSave()
        await onboardingPage.verifyNotLoggedIn()

        // 이름 + 나이 입력 > 저장 > 온보딩 스크린에 머물러 있음 + 홈탭에 도착 안함
        await onboardingPage.setAge(5)
        await onboardingPage.tapSave()
        await onboardingPage.verifyNotLoggedIn()

        // 나이 + 성별 입력 > 저장 > 온보딩 스크린에 머무러 있음 + 홈탭에 도착 안함
        await onboardingPage.setName('')
        await onboardingPage.tapGender(onboardingPage.female)
        await onboardingPage.tapSave()
        await onboardingPage.verifyNotLoggedIn()
    })

    //로그인 성공
    it ('로그인 성공 검증', async() => {
        // 이름, 나이, 성별 입력 > 저장 >  온보딩 스크린 아님 + 홈탭 도착
        await onboardingPage.setName('오토봇')
        await onboardingPage.tapSave()
        await onboardingPage.verifyLoggedIn()
        
    })

    /*
    it('성별과 이름 넣기', async () => {
        await actions.type(onboardingPage.nameInputV2, '오토봇')
        // await onboardingPage.setName('오토봇')
        await onboardingPage.selectGenderV2(onboardingLoc.female)
        // await actions.verifyElementText(onboardingPage.nameInputV2, '오토봇') //correct
        await actions.verifyElementText(onboardingPage.nameInputV2, '봇') //incorrect
    })
    */
})