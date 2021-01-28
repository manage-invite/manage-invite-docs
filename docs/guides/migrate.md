---
title: Migrate from another bot
sidebar_label: Migrate from another bot
description: ManageInvite allows you to configure role rewards to assign roles to the members who have a certain number of invites!
---

In this tutorial, you will learn how to migrate from another bot, to use ManageInvite instead! 💾

ManageInvite and the other invite management bots only count joins, leaves and fake invites once they are added. It means that usually, when you add an invite management bot to your server, all the invites are at 0, for all the members.

ManageInvite has a very useful command called `+sync-invites`. It allows you to load the invites stored in your server settings into the ManageInvite database, so you don't start from scratch:

![Example Sync Invites](/img/example-sync.png)

Note it won't restore the "leaves" part of the invites stats, because the bot can only get the total number of uses of an invite, but it can't know whether the member who used this invite or not

Sometimes, the results are different between the reality and the invites stored in your server settings (sometimes invites are deleted, and the bot can't retrieve them), but it is often a very good approximation.  
