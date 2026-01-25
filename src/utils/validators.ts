import { t } from "@lingui/core/macro";
import * as v from "valibot";

export function toNullIfEmpty<
  T extends v.BaseSchema<string, unknown, v.BaseIssue<unknown>>,
>(schema: T) {
  return v.union([
    schema,
    v.pipe(
      v.string(),
      v.empty("empty string"),
      v.transform(() => null),
    ),
    v.null(),
  ]);
}

export const minLengthStringMessage: v.ErrorMessage<
  v.MinLengthIssue<string, number>
> = (issue) => t`${issue.requirement}文字以上で入力してください`;

export const maxLengthStringMessage: v.ErrorMessage<
  v.MaxLengthIssue<string, number>
> = (issue) => t`${issue.requirement}文字以内で入力してください`;

export const minLengthArrayMessage: v.ErrorMessage<
  v.MinLengthIssue<unknown[], number>
> = (issue) => t`${issue.requirement}以上の要素を入力してください`;

export const maxLengthArrayMessage: v.ErrorMessage<
  v.MaxLengthIssue<unknown[], number>
> = (issue) => t`${issue.requirement}以下の要素を入力してください`;

export const nonZodiacSigns: v.ErrorMessage<v.PicklistIssue> = () =>
  t`有効な星座を選択してください`;
