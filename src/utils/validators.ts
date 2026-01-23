import { t } from "@lingui/core/macro";
import type * as v from "valibot";

export const minLengthString: v.ErrorMessage<
  v.MinLengthIssue<string, number>
> = (issue) => t`${issue.requirement}文字以上で入力してください`;

export const maxLengthString: v.ErrorMessage<
  v.MaxLengthIssue<string, number>
> = (issue) => t`${issue.requirement}文字以内で入力してください`;
