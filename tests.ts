import { getOperationId } from "./src/utils/getOperationId.ts";
import { isOperationLink } from "./src/utils/isOperationLink.ts";

let k = 0;

function test(actual: unknown, expected: unknown) {
  let n = `00${++k}`.slice(-3);

  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log(n);
    console.log(`Expected: ${JSON.stringify(expected, null, 2)}`);
    console.log(`Actual: ${JSON.stringify(actual, null, 2)}`);

    throw new Error("Unexpected value");
  }

  console.log(`${n} Passed`);
}

test(isOperationLink(null), false);
test(isOperationLink({}), false);
test(isOperationLink("https://cloud-api.yandex.net/v1/disk/operations?id=abc"), false);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operations?id=abc" }), true);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operations/?id=abc" }), true);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operationsx/?id=abc" }), false);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operations/abc" }), true);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operations/abc/" }), true);
test(isOperationLink({ href: "https://cloud-api.yandex.net/v1/disk/operationsx/abc/" }), false);
test(isOperationLink({ href: "https://example.com/abc/" }), false);

test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operations?id=abc", templated: false }), "abc");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operationsx?id=abc", templated: false }), "");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operations/?id=abc", templated: false }), "abc");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operationsx/?id=abc", templated: false }), "");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operations/abc", templated: false }), "abc");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operations/abc/", templated: false }), "abc");
test(getOperationId({ method: "GET", href: "https://cloud-api.yandex.net/v1/disk/operationsx/abc/", templated: false }), "");

console.log("\nPassed");
