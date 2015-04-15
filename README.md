# Rewards Service

####Scenario

A ground-breaking broadcaster has decided to reward its most loyal customers. A software
engineering team, developing the customer account website, is working on the story below.

######Display customer's available rewards
> As a customer, if I am eligible for rewards, then I want to see which rewards
> are available based on my channel subscriptions.

The Account Management team has partnered with the Customer Status team that provides a
service that checks the customer eligibility based on loyalty and billing status.

####Populated Data

The application has been preloaded with three accounts to capture the majority of variations.

| Account Number | Eligible for a reward |
|-----|-----|
| 1001 | Eligible |
| 1002 | Not Eligible |
| 1003 | Eligible |

####Non-Library Code

There's a lot of Open Source here... So what did I actually write? Check out these folders:

```
channelservice/
eligibilityservice/
lib/
os/
rewardservice/
```

