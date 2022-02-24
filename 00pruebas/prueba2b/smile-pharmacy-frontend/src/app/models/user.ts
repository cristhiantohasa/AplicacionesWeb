export class User {
    constructor(
        public name: String | null,
        public lastName: String | null,
        public email: String | null,
        public password: String | null,
        public dateBirth: String | null,
        public sex: String | null,
    ) {}
}