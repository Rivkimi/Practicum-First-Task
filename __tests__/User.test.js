import test from 'ava';
import { Users, userValidatorForCreate, userValidatorForUpdate } from '../models/User.js';
test('My test', t => {
    t.pass();
});
test('userValidatorForCreate - valid input', t => {
    const user = {
        Id: "12345",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890"
    };
    const result =userValidatorForCreate(user);
     t.deepEqual(result.error, undefined);
});
test('userValidatorForUpdate - valid input', t => {
    const user = {
        Id: "214434961",
        name: "rivki",
        email: "ri0583235847@gmail.com",
        phone: "0583235847"
    };
    const result =userValidatorForUpdate(user);
     t.deepEqual(result.error, undefined);
});                         