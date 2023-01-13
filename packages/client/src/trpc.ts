import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "server";

// @ts-ignore
export const trpc = createTRPCReact<AppRouter>();
