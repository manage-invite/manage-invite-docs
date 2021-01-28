---
title: Role rewards
sidebar_label: Role rewards
description: ManageInvite allows you to configure role rewards to assign roles to the members who have a certain number of invites!
---

In this tutorial, you will learn how to configure specific roles added when the members of your server reach a certain number of invites! 🏆

## Table of Contents
1. [Add a role](#add-a-role)
2. [List the roles](#list-the-roles)
3. [Remove a role](#remove-a-role)
4. [Advanced configuration](#advanced-configuration)

## Add a role

You can add new role to your server using the `+addrank` command. For example, if I want my members to obtain the `Silver` role when they reach 5 invites, I can use `+addrank 5 Silver`.

![Example Add Roles](/img/example-add-roles.png)

## List the roles

You can then run the `+ranks` command to get the updated list of your roles.

![Example List Roles](/img/example-list-roles.png)

## Remove a role

You can also delete a role using the `+removerank` command. For example, if I no longer want my members to obtain the `Silver` role when they reach 5 invites, I can use `+removerank Silver`.

## Advanced configuration

ManageInvite also allows you to go further in the configuration of role rewards.

If you want the members to keep only their highest roles, you can use the `+set-stacked-ranks` command:

![Example Stacked Ranks](/img/example-stacked-roles.png)

If you want the members to keep their roles even if they loose invites, you can use the `+set-keep-ranks` command:

:::caution
Image can't be loaded
:::

These settings are also editable using the dashboard:

![Example Roles Config Dash](/img/example-roles-config-dash.png)
