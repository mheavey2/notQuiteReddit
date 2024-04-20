// https://runthatline.com/how-to-mock-fetch-api-with-vitest/
var global = global || window;
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { searchItem } from "../../util/Reddit";
import { cleanup } from "@testing-library/react";

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}
describe("Reddit Service", () => {
  beforeEach(() => {
    global.fetch.mockReset();
  });
  afterEach(() => {
    cleanup();
  });
  test.searchItem("makes a GET request to fetch search results", async () => {
    const searchResponse = [
      {
        title: "Unit Test",
        done: false,
      },
    ];

    const token = "token";

    fetch.mockResolvedValue(createFetchResponse(searchResponse));

    const searchInput = "searchInput";

    expect(fetch).toHaveBeenCalledWith(
      `https://api.reddit.com/search?q=${searchInput}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    expect(searchItem).toStrictEqual(searchResponse);
  });
});
