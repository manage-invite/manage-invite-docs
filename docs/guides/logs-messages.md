---
title: Setup join/leave messages
sidebar_label: Logs messages
description: ManageInvite allows you to configure logs messages to send when someone joins or leaves your server!
---

In this tutorial, you will learn how to configure join and leave messages sent when someone joins or leaves your server! 💬

## Table of Contents
1. [Configure the messages](#configure-the-messages)
2. [Special messages](#special-messages)
3. [Variables](#variables)
4. [Embed messages](#remove-a-role)

## Configure the messages

You can enable, disable and update join/leave messages on the dashboard. You can access it [here](https://dash.manage-invite.xyz), and click on your server settings page.

![Example Dash](/img/example-dashboard.png)

Here, you can configure **Join Messages** (logs messages sent in a custom channel when someone joins), **Leave Messages** (logs messages sent in a custom channel when someone leaves) and **Join Messages in DM** (welcome messages sent to the users who join the server).

## Variables

You can use **variables** in your messages, to fill it with dynamic content. Once the message is sent, variables will be replaced with the right value.
For example, if you want to add the name of the member who joined, you can use `{user.name}`.

Here is a list of the available variables:

| **Name** | **Description** | **Example** |
|----------|-----------------|-------------|
|{user}|The mention of the user who joined the server|@Nooby
|{user.name}|The name of the user who joined the server|Noody
|{user.tag}|The name and the discriminator of the user who joined the server|Nooby#0000
|{user.id}|The ID of the user who joined the server|422820341791064085
|{user.createdat}|The time elapsed since the creation of the account of the user who joined the server|3 days ago
|{user.numJoins}|The total number of joins of the user who joined the server|1
|{server}|The name of the server|Nooby's world
|{server.count}|The new number of members in the server|950
|{inviter}|The mention of the member who invited them|@TheFriendOfNooby
|{inviter.name}|The name of the member who invited them|TheFriendOfNooby
|{inviter.tag}|The name and the discriminator of the member who invited them|TheFriendOfNooby#0000
|{inviter.id}|The ID of the member who invited them|557445719892688897
|{inviter.invites}|The new number of invites of the member who invited them|100
|{invite.code}|The code of the invite used to invite the user|hw87VUQ
|{invite.url}|The URL of the invite used to invite the user|https://discord.gg/hw87VUQ
|{invite.channel}|The channel in which the invite used to invite the user was created|#chat

You can, for example, use:
```
Welcome, {user} on {server}! You were invited by **{inviter.tag}**, who now has **{inviter.invites}**!
```

## Special messages

Sometimes, the users join using a vanity URL (it is an invite with a predefined code, like `discord.gg/discord-api`). You can choose a specific message sent in this case:

![Example Special Messages](/img/example-special-messages.png)

You can also configure the messages sent when the bot can't find who invited the member, or when a bot joins the server!

## Embed messages

ManageInvite also allows you to send embed messages. Here is an example:

![Example Embed Message](/img/example-embed-message.png)

You can create an embed message using this website: **https://embed-generator.manage-invite.xyz**. Create your embed, preview it and copy the JSON code at the bottom of the page.

Create your embed:

![Example Embed Generator Inputs](/img/example-embed-generator-inputs.png)

Then, copy it using this button:

![Example Embed Generator Json](/img/example-embed-generator-json.png)

Execute the `+configjoin` (or `+configleave` and `+configjoindm`) command or the dashboard and set the message to the text you copied before:

![Example Embed Generator Dash](/img/example-embed-generator-dash.png)

And you're done, the message will be sent as an embed message!
