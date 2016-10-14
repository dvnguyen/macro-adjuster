# Macro Adjuster

## Version 1: Requirements
- Calculate BMR
    - It should be able to get and set the following user metrics
        + Age
        + Sex
        + Weight
        + Height
        + Activity level
    - It should be able to calculate the user's BMR
        + **Male Formula:** 66 + (6.23×Weight) + (12.7×Height) − (6.8×Age)
        + **Women Formula:** 655 + (4.35×Wight) + (4.7×Height) − (4.7×Age)
    - It should be able to calculate the user's adjusted BMR for their specific activity level.