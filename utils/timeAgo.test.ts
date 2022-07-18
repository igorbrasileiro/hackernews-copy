import { timeAgo } from "./timeAgo";

const DATE_NOW = Date.now();
const MILlISECOND = 1_000;

test("minute", () => {
  expect(timeAgo(DATE_NOW - 60 * MILlISECOND)).toBe("1 minute ago");
});

test("minutes", () => {
  expect(timeAgo(DATE_NOW - 2 * 60 * MILlISECOND)).toBe("2 minutes ago");
});

test("hour", () => {
  expect(timeAgo(DATE_NOW - 60 * 60 * MILlISECOND)).toBe("1 hour ago");
});

test("hours", () => {
  expect(timeAgo(DATE_NOW - 2 * 60 * 60 * MILlISECOND)).toBe("2 hours ago");
});

test("day", () => {
  expect(timeAgo(DATE_NOW - 24 * 60 * 60 * MILlISECOND)).toBe("1 day ago");
});