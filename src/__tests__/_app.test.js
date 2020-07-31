import { render, screen } from "@testing-library/react";
import MyApp from "../pages/_app";
import Home from "../pages/index";
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
let tempPageProps = {
}

describe("Furry Street App", () => {
    it("renders without crashing", () => {
      render(<MyApp Component={Home} pageProps={tempPageProps} />);
      expect(
        screen.getByRole("button", { name: "menu" })
      ).toBeInTheDocument();
    });
  });