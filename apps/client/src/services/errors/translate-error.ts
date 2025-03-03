import { t } from "@lingui/macro";
import { ERRORMESSAGE } from "@reactive-resume/utils";

export const translateError = (error: ERRORMESSAGE) => {
  switch (error) {
    case ERRORMESSAGE.InvalidCredentials: {
      return t`It doesn't look like a user exists with the credentials you provided.`;
    }
    case ERRORMESSAGE.UserAlreadyExists: {
      return t`A user with this email address and/or username already exists.`;
    }
    case ERRORMESSAGE.SecretsNotFound: {
      return t`User does not have an associated 'secrets' record. Please report this issue on GitHub.`;
    }
    case ERRORMESSAGE.OAuthUser: {
      return t`This email address is associated with an OAuth account. Please sign in with your OAuth provider.`;
    }
    case ERRORMESSAGE.InvalidResetToken: {
      return t`It looks like the reset token you provided is invalid. Please try restarting the password reset process again.`;
    }
    case ERRORMESSAGE.InvalidVerificationToken: {
      return t`It looks like the verification token you provided is invalid. Please try restarting the verification process again.`;
    }
    case ERRORMESSAGE.EmailAlreadyVerified: {
      return t`It looks like your email address has already been verified.`;
    }
    case ERRORMESSAGE.TwoFactorNotEnabled: {
      return t`Two-factor authentication is not enabled for this account.`;
    }
    case ERRORMESSAGE.TwoFactorAlreadyEnabled: {
      return t`Two-factor authentication is already enabled for this account.`;
    }
    case ERRORMESSAGE.InvalidTwoFactorCode: {
      return t`It looks like the two-factor authentication code you provided is invalid. Please try again.`;
    }
    case ERRORMESSAGE.InvalidTwoFactorBackupCode: {
      return t`It looks like the backup code you provided is invalid or used. Please try again.`;
    }
    case ERRORMESSAGE.InvalidBrowserConnection: {
      return t`There was an error connecting to the browser. Please make sure 'chrome' is running and reachable.`;
    }
    case ERRORMESSAGE.ResumeSlugAlreadyExists: {
      return t`A resume with this slug already exists, please pick a different unique identifier.`;
    }
    case ERRORMESSAGE.ResumeNotFound: {
      return t`It looks like the resume you're looking for doesn't exist.`;
    }
    case ERRORMESSAGE.ResumeLocked: {
      return t`The resume you want to update is locked, please unlock if you wish to make any changes to it.`;
    }
    case ERRORMESSAGE.ResumePrinterError: {
      return t`Something went wrong while printing your resume. Please try again later or raise an issue on GitHub.`;
    }
    case ERRORMESSAGE.ResumePreviewError: {
      return t`Something went wrong while grabbing a preview your resume. Please try again later or raise an issue on GitHub.`;
    }
    case ERRORMESSAGE.SomethingWentWrong: {
      return t`Something went wrong while processing your request. Please try again later or raise an issue on GitHub.`;
    }

    default: {
      return null;
    }
  }
};
