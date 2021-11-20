import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function() {
    beforeEach(async function() {
        await LoginPage.open();
    });

    it('Successful log in', async function() {
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('test@example.com', 'Qwerty!23');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    });
});