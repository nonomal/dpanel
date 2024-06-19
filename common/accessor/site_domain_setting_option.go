package accessor

import "html/template"

type SiteDomainSettingOption struct {
	ServerName                string        `json:"serverName"`
	ServerAddress             string        `json:"serverAddress"`
	TargetName                string        `json:"targetName"`
	Port                      int32         `json:"port"`
	EnableBlockCommonExploits bool          `json:"enableBlockCommonExploits"`
	EnableAssetCache          bool          `json:"enableAssetCache"`
	EnableWs                  bool          `json:"enableWs"`
	EnableSSL                 bool          `json:"enableSSL"`
	ExtraNginx                template.HTML `json:"extraNginx"`
	SslCrt                    string        `json:"sslCrt"`
	SslKey                    string        `json:"sslKey"`
	Email                     string        `json:"email"`
}