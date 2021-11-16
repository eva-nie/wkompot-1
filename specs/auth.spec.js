import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function() {
    it('Successful log in', async function() {
        await LoginPage.open();
        await expect(LoginPage.buttonSubmit)
            .toBeDisabled();
        await LoginPage.login('test@example.com', 'Qwerty!23');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    });
});