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

const validOperationHrefs = [
  "https://cloud-api.yandex.net/v1/disk/operations?id=a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operations/?id=a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operations/a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operations/a0b1c2/",
];

const invalidOperationHrefs = [
  "https://cloud-api.yandex.net/v1/disk/operationsx?id=a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operationsx/?id=a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operationsx/a0b1c2",
  "https://cloud-api.yandex.net/v1/disk/operationsx/a0b1c2/",
  "https://example.com/a0b1c2/",
];

test(isOperationLink(null), false);
test(isOperationLink({}), false);

// Should be `{ href: string }`, not just `string`
test(
  isOperationLink("https://cloud-api.yandex.net/v1/disk/operations?id=a0b1c2"),
  false,
);

for (let href of validOperationHrefs)
  test(isOperationLink({ href }), true);

for (let href of invalidOperationHrefs)
  test(isOperationLink({ href }), false);

for (let href of validOperationHrefs)
  test(getOperationId({ method: "GET", href, templated: false }), "a0b1c2");

for (let href of invalidOperationHrefs)
  test(getOperationId({ method: "GET", href, templated: false }), "");

console.log("\nPassed");
