import { AsyncTest, Expect, Test, TestCase, TestFixture } from "alsatian";
import {chain as _, resolve} from "../";

interface ITestObject {
    a: number;
    b: {
        c: number;
        d: {
            e: string;
        };
    };
}

const testObject: ITestObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: "text",
        }
    },
};

@TestFixture()
export class ChainTest {

    @TestCase(testObject, testObject)
    @Test("testObject")
    public objectTest1(object: ITestObject, expect: any) {
        const result = resolve(_(object));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, 1)
    @Test("testObject.a")
    public objectTest2(object: ITestObject, expect: any) {
        const result = resolve(_(_(object).a));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, {
        c: 2,
        d: {
            e: "text",
        },
    })
    @Test("testObject.b")
    public objectTest3(object: ITestObject, expect: any) {
        const result = resolve(_(_(object).b));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, 2)
    @Test("testObject.b.c")
    public objectTest4(object: ITestObject, expect: any) {
        const result = resolve(_(_(_(object).b).c));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, {
        e: "text",
    })
    @Test("testObject.b.d")
    public objectTest5(object: ITestObject, expect: any) {
        const result = resolve(_(_(_(object).b).d));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, "text")
    @Test("testObject.b.d.e")
    public objectTest6(object: ITestObject, expect: any) {
        const result = resolve(_(_(_(_(object).b).d).e));
        Expect(result).toEqual(expect);
    }

    @TestCase(testObject, null)
    @Test("testObject.b.d.f")
    public objectTest7(object: any, expect: any) {
        const result = resolve(_(_(_(_(object).b).d).f));
        Expect(result).toEqual(expect);
    }
}