package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewArchiveEntityFunc func(client *N4chanSDK, entopts map[string]any) N4chanEntity

var NewBoardEntityFunc func(client *N4chanSDK, entopts map[string]any) N4chanEntity

var NewCatalogEntityFunc func(client *N4chanSDK, entopts map[string]any) N4chanEntity

var NewIndexEntityFunc func(client *N4chanSDK, entopts map[string]any) N4chanEntity

var NewThreadEntityFunc func(client *N4chanSDK, entopts map[string]any) N4chanEntity

