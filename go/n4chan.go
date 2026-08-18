package voxgign4chansdk

import (
	"github.com/voxgig-sdk/n4chan-sdk/go/core"
	"github.com/voxgig-sdk/n4chan-sdk/go/entity"
	"github.com/voxgig-sdk/n4chan-sdk/go/feature"
	_ "github.com/voxgig-sdk/n4chan-sdk/go/utility"
)

// Type aliases preserve external API.
type N4chanSDK = core.N4chanSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type N4chanEntity = core.N4chanEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type N4chanError = core.N4chanError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewArchiveEntityFunc = func(client *core.N4chanSDK, entopts map[string]any) core.N4chanEntity {
		return entity.NewArchiveEntity(client, entopts)
	}
	core.NewBoardEntityFunc = func(client *core.N4chanSDK, entopts map[string]any) core.N4chanEntity {
		return entity.NewBoardEntity(client, entopts)
	}
	core.NewCatalogEntityFunc = func(client *core.N4chanSDK, entopts map[string]any) core.N4chanEntity {
		return entity.NewCatalogEntity(client, entopts)
	}
	core.NewIndexEntityFunc = func(client *core.N4chanSDK, entopts map[string]any) core.N4chanEntity {
		return entity.NewIndexEntity(client, entopts)
	}
	core.NewThreadEntityFunc = func(client *core.N4chanSDK, entopts map[string]any) core.N4chanEntity {
		return entity.NewThreadEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewN4chanSDK = core.NewN4chanSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewN4chanSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *N4chanSDK  { return NewN4chanSDK(nil) }
func Test() *N4chanSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
