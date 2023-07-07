import { randEmail, randPassword } from '@ngneat/falso';

export const moderatorFixture = {
    email: randEmail(),
    password: randPassword()
};

export const updateEmailFixture = {
    email: randEmail()
};

export const updatePasswordFixture = randPassword();
