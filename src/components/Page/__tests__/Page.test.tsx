import React from "react";
import { render, waitFor } from "@testing-library/react";
import Page from "../Page";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ html: "<h1>Test</h1>" }) })
) as jest.Mock;

describe("Input", () => {
  it("is truthy", async () => {
    await act(async () => {
      render(<Page id="id" />);
    });

    await waitFor(() => {
      expect(Page).toBeTruthy();
    });
  });
});
