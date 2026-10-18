import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getNextProjectIndex } from "./project-carousel";

describe("getNextProjectIndex", () => {
  it("advances from the last project to the first", () => {
    assert.equal(getNextProjectIndex(1, 2, "forward"), 0);
  });

  it("moves from the first project to the last when going backward", () => {
    assert.equal(getNextProjectIndex(0, 2, "backward"), 1);
  });

  it("returns the same index for a one-project carousel", () => {
    assert.equal(getNextProjectIndex(0, 1, "forward"), 0);
  });

  it("returns zero when there are no projects", () => {
    assert.equal(getNextProjectIndex(0, 0, "forward"), 0);
  });
});
