import { sentenceCase } from "./sentenceCase";

it("checks string format conversion", () => {
  const sampleString = "Hello_World";
  const formatedString = sentenceCase(sampleString);
  const expectedformat = "Hello world";
  expect(formatedString).toEqual(expectedformat);
});
