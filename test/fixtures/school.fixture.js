import {
    randCity,
    randCompanyName,
    randCountry,
    randFullName
} from '@ngneat/falso';

export const schoolFixture = {
    name: randCompanyName(),
    director: randFullName(),
    locality: randCity(),
    province: randCountry(),
    legalEntity: randFullName()
};
