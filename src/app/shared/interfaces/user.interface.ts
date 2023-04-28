export interface User {
  id: string;
  firstname: string;
  can_authenticate: boolean;
  products: string[];
  force_reset_password: boolean;
  approved_terms_use: boolean;
  email: string;
  customer_id: string;
  subscription_payment_status: string;
  subscription_status: string;
  subscription_plan_name: string;
  email_verified: boolean;
  firebase_token: string;
  access_token: string;
  refresh_token: string;
}
