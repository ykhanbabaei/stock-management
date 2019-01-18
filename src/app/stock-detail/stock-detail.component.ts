import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nli-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

    stock:any;
    
    json:string = "{\n" +
    "  \"id\": \"e99be4bf-ce7c-4540-80c1-009879ecff63\",\n" +
    "  \"identificationNumber\": \"1ISK0000000333\",\n" +
    "  \"article\": {\n" +
    "    \"id\": \"adfdb137-af2f-37b9-8e2b-3e8ee24766c0\",\n" +
    "    \"name\": \"MT175-D1A51-V22-K0t\",\n" +
    "    \"equipmentType\": {\n" +
    "      \"id\": \"56442ee3-df69-358c-a77d-f9ca1e4a9a1f\",\n" +
    "      \"basicTypes\": [\n" +
    "        \"ZAEHLEINRICHTUNG\"\n" +
    "      ],\n" +
    "      \"typeApprovals\": [\n" +
    "        {\n" +
    "          \"@class\": \".mid.MidTypeApproval\",\n" +
    "          \"approvalLicence\": null,\n" +
    "          \"verificationDate\": null,\n" +
    "          \"authority\": null,\n" +
    "          \"ecTypeExaminationCertificate\": {\n" +
    "            \"@class\": \".EcTypeExaminationCertificate\",\n" +
    "            \"nmbr\": null,\n" +
    "            \"expiryDate\": null,\n" +
    "            \"verificationDate\": \"2017-03-21T01:00:00.000+01:00\",\n" +
    "            \"authority\": \"1304\",\n" +
    "            \"addendum\": null,\n" +
    "            \"country\": null,\n" +
    "            \"conformity\": \"11MID002\"\n" +
    "          },\n" +
    "          \"conformity\": null\n" +
    "        },\n" +
    "        {\n" +
    "          \"@class\": \".domestic.DomesticApproval\",\n" +
    "          \"approvalLicence\": null,\n" +
    "          \"verificationDate\": null,\n" +
    "          \"authority\": \"1304\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"@class\": \".domestic.DomesticConformityApproval\",\n" +
    "          \"approvalLicence\": \"DE-16-M-PTB-0037\",\n" +
    "          \"verificationDate\": \"2016-12-13T01:00:00.000+01:00\",\n" +
    "          \"authority\": \"0102\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"wasteCode\": null,\n" +
    "      \"typeId\": \"M010001\",\n" +
    "      \"description\": \"mME Drehstrom/Wechselstrom L3, mit Rücklaufsperre\",\n" +
    "      \"serviceGroupId\": null,\n" +
    "      \"externalEquipmentTypeDetail\": \"EHZ\",\n" +
    "      \"externalEquipmentType\": \"MME\",\n" +
    "      \"specification\": null,\n" +
    "      \"equipmentComponentTypes\": {\n" +
    "        \"Messeinheit\": {\n" +
    "          \"@class\": \"ElectricMeasuringUnitType\",\n" +
    "          \"id\": \"4e94a8c8-afed-41bb-90f6-0cfb80c5d477\",\n" +
    "          \"componentTypeId\": \"DSZ016\",\n" +
    "          \"description\": \"elektrische Messeinheit, 3X230/400V, 1x230V (L3)\",\n" +
    "          \"customFields\": null,\n" +
    "          \"typeApproval\": null,\n" +
    "          \"electricMedium\": \"DREHSTROM\",\n" +
    "          \"electricMeasuringPrinciple\": \"ELEKTRONISCH_DIREKT\",\n" +
    "          \"wireCrossSection\": null,\n" +
    "          \"electricMidMeasuringUnitParameter\": {\n" +
    "            \"@class\": \".ElectricMidMeasuringUnitParameter\",\n" +
    "            \"in\": null,\n" +
    "            \"imax\": 5,\n" +
    "            \"imin\": 0.25,\n" +
    "            \"ist\": null,\n" +
    "            \"itr\": 60,\n" +
    "            \"unmax\": 400,\n" +
    "            \"unmin\": 230,\n" +
    "            \"electricMidClass\": \"A\",\n" +
    "            \"toptmax\": null,\n" +
    "            \"toptmin\": null,\n" +
    "            \"ttrmax\": null,\n" +
    "            \"ttrmin\": null\n" +
    "          },\n" +
    "          \"electricEwgMeasuringUnitParameter\": null,\n" +
    "          \"electricMeasuringMethod\": \"ROGOWSKI\"\n" +
    "        },\n" +
    "        \"Stromzufuhr\": {\n" +
    "          \"@class\": \"MainsAdapterComponentType\",\n" +
    "          \"id\": \"0d4331de-0c85-42ce-beab-b75d19df0bb0\",\n" +
    "          \"componentTypeId\": \"Hilfspannung\",\n" +
    "          \"description\": \"Hilfsspannung vorhanden lt. FNN, L1-L3, N\",\n" +
    "          \"customFields\": null,\n" +
    "          \"constructionKind\": null,\n" +
    "          \"mainsAdapterConnector\": \"SCHRAUBKLEMME\",\n" +
    "          \"urmin\": 0,\n" +
    "          \"urmax\": 0,\n" +
    "          \"sr\": 0,\n" +
    "          \"uout\": [],\n" +
    "          \"pr\": 0,\n" +
    "          \"voltageKindIn\": \"AC\",\n" +
    "          \"voltageKindOut\": \"DC\"\n" +
    "        },\n" +
    "        \"Optische Impulsschnittstelle\": {\n" +
    "          \"@class\": \"PulseOutputType\",\n" +
    "          \"id\": \"4e007376-0d47-4d00-82bc-cae0faed62cf\",\n" +
    "          \"componentTypeId\": \"Impuls Optisch 10.000\",\n" +
    "          \"description\": \"LED-Diode, IR-Spektrum, 10.000 Imp/kWh\",\n" +
    "          \"customFields\": null,\n" +
    "          \"interfaceUnitPosition\": \"VORNE\",\n" +
    "          \"digitalIOUnitKind\": \"S0_A\",\n" +
    "          \"connector\": \"NONE\",\n" +
    "          \"digitalIOElectricCharacteristics\": null\n" +
    "        },\n" +
    "        \"Optische Schnittstelle\": {\n" +
    "          \"@class\": \"PulseOutputType\",\n" +
    "          \"id\": \"51fc6ed2-a56e-4edb-9952-df8c0e6c47f9\",\n" +
    "          \"componentTypeId\": \"DS, optisch\",\n" +
    "          \"description\": \"MSB- und Kundenschnittstelle, unidirektional, DIN EN 62056-21\",\n" +
    "          \"customFields\": null,\n" +
    "          \"interfaceUnitPosition\": \"VORNE\",\n" +
    "          \"digitalIOUnitKind\": \"USER_DEFINED\",\n" +
    "          \"connector\": \"NONE\",\n" +
    "          \"digitalIOElectricCharacteristics\": null\n" +
    "        },\n" +
    "        \"Zähler\": {\n" +
    "          \"@class\": \"CentralUnitType\",\n" +
    "          \"id\": \"56558de1-704e-4e51-918d-01ac3dd083e2\",\n" +
    "          \"componentTypeId\": null,\n" +
    "          \"description\": null,\n" +
    "          \"customFields\": null,\n" +
    "          \"centralSubUnitTypes\": [\n" +
    "            {\n" +
    "              \"@class\": \"SmartMeterSubUnitType\",\n" +
    "              \"remoteControl\": \"NOT_AVAILABLE\",\n" +
    "              \"measurementValueLogging\": \"MANUAL_READOUT_METER\"\n" +
    "            }\n" +
    "          ]\n" +
    "        },\n" +
    "        \"Gehaeuse\": {\n" +
    "          \"@class\": \"ElectricThreePointMountingHousingType\",\n" +
    "          \"id\": \"f80d8fa2-104c-450e-8f16-b85983e472a2\",\n" +
    "          \"componentTypeId\": \"3-Punkt-Befestigung DS-Zähler\",\n" +
    "          \"description\": \"3-Punkt-Befestigung DS-Zähler\",\n" +
    "          \"customFields\": null,\n" +
    "          \"dimension\": {\n" +
    "            \"length\": 180,\n" +
    "            \"width\": 50,\n" +
    "            \"height\": 250\n" +
    "          },\n" +
    "          \"color\": \"Grau\",\n" +
    "          \"mountingPosition\": \"VERTICAL\",\n" +
    "          \"mountingType\": \"DPA 3-Dreipunktaufhängung\"\n" +
    "        },\n" +
    "        \"Registergruppe\": {\n" +
    "          \"@class\": \"RegisterGroupType\",\n" +
    "          \"id\": \"63d9751e-612b-4b53-b15f-c1f97919263b\",\n" +
    "          \"componentTypeId\": \"S60Z3MME\",\n" +
    "          \"description\": \"Mehrtarif Registergruppe\",\n" +
    "          \"customFields\": null,\n" +
    "          \"maxTotalNumberOfRegisters\": 3,\n" +
    "          \"minTotalNumberOfRegisters\": 1,\n" +
    "          \"registerTypes\": [\n" +
    "            {\n" +
    "              \"registerTasks\": [\n" +
    "                {\n" +
    "                  \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "                  \"externalObis\": null,\n" +
    "                  \"billingRelevant\": \"true\",\n" +
    "                  \"channel\": \"C0\",\n" +
    "                  \"measurand\": \"WIRKLEISTUNG\",\n" +
    "                  \"direction\": \"BEZUG\",\n" +
    "                  \"measuringMode\": \"INTEGRAL\",\n" +
    "                  \"valueMode\": null,\n" +
    "                  \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "                  \"countingMode\": \"KUMULATIV\",\n" +
    "                  \"characteristic\": \"SALDIEREND\",\n" +
    "                  \"tariff\": \"T0\",\n" +
    "                  \"pushPeriod\": null,\n" +
    "                  \"obisRepresentation\": {\n" +
    "                    \"values\": [\n" +
    "                      1,\n" +
    "                      0,\n" +
    "                      1,\n" +
    "                      8,\n" +
    "                      0,\n" +
    "                      0\n" +
    "                    ],\n" +
    "                    \"c\": 1,\n" +
    "                    \"d\": 8,\n" +
    "                    \"e\": 0,\n" +
    "                    \"f\": 0,\n" +
    "                    \"a\": 1,\n" +
    "                    \"b\": 0\n" +
    "                  }\n" +
    "                },\n" +
    "                {\n" +
    "                  \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "                  \"externalObis\": null,\n" +
    "                  \"billingRelevant\": \"true\",\n" +
    "                  \"channel\": \"C0\",\n" +
    "                  \"measurand\": \"WIRKLEISTUNG\",\n" +
    "                  \"direction\": \"BEZUG\",\n" +
    "                  \"measuringMode\": \"INTEGRAL\",\n" +
    "                  \"valueMode\": null,\n" +
    "                  \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "                  \"countingMode\": \"KUMULATIV\",\n" +
    "                  \"characteristic\": \"SALDIEREND\",\n" +
    "                  \"tariff\": \"T1\",\n" +
    "                  \"pushPeriod\": null,\n" +
    "                  \"obisRepresentation\": {\n" +
    "                    \"values\": [\n" +
    "                      1,\n" +
    "                      0,\n" +
    "                      1,\n" +
    "                      8,\n" +
    "                      1,\n" +
    "                      0\n" +
    "                    ],\n" +
    "                    \"c\": 1,\n" +
    "                    \"d\": 8,\n" +
    "                    \"e\": 1,\n" +
    "                    \"f\": 0,\n" +
    "                    \"a\": 1,\n" +
    "                    \"b\": 0\n" +
    "                  }\n" +
    "                },\n" +
    "                {\n" +
    "                  \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "                  \"externalObis\": null,\n" +
    "                  \"billingRelevant\": \"true\",\n" +
    "                  \"channel\": \"C0\",\n" +
    "                  \"measurand\": \"WIRKLEISTUNG\",\n" +
    "                  \"direction\": \"BEZUG\",\n" +
    "                  \"measuringMode\": \"INTEGRAL\",\n" +
    "                  \"valueMode\": null,\n" +
    "                  \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "                  \"countingMode\": \"KUMULATIV\",\n" +
    "                  \"characteristic\": \"SALDIEREND\",\n" +
    "                  \"tariff\": \"T2\",\n" +
    "                  \"pushPeriod\": null,\n" +
    "                  \"obisRepresentation\": {\n" +
    "                    \"values\": [\n" +
    "                      1,\n" +
    "                      0,\n" +
    "                      1,\n" +
    "                      8,\n" +
    "                      2,\n" +
    "                      0\n" +
    "                    ],\n" +
    "                    \"c\": 1,\n" +
    "                    \"d\": 8,\n" +
    "                    \"e\": 2,\n" +
    "                    \"f\": 0,\n" +
    "                    \"a\": 1,\n" +
    "                    \"b\": 0\n" +
    "                  }\n" +
    "                }\n" +
    "              ],\n" +
    "              \"minimumInstances\": 0,\n" +
    "              \"maximumInstances\": 0,\n" +
    "              \"format\": null,\n" +
    "              \"memoryDepth\": 0,\n" +
    "              \"scales\": []\n" +
    "            }\n" +
    "          ],\n" +
    "          \"checksumAlgorithmId\": null,\n" +
    "          \"energyFlow\": \"SINGLE_DIRECTION\",\n" +
    "          \"tariffCount\": \"MULTI_TARIFF\"\n" +
    "        },\n" +
    "        \"Kommunikationsschnittstelle 2\": {\n" +
    "          \"@class\": \"CommunicationInterfaceType\",\n" +
    "          \"id\": \"6c44e902-f9b4-4bc1-8aa3-36783e49ea06\",\n" +
    "          \"componentTypeId\": \"Tarifsteuerung\",\n" +
    "          \"description\": \"Tarifsteuerung Mehrtarifzähler, unidirektional, MSB-Schnittstelle\",\n" +
    "          \"customFields\": null,\n" +
    "          \"interfaceUnitPosition\": \"VORNE\",\n" +
    "          \"functions\": [],\n" +
    "          \"protocol\": null,\n" +
    "          \"connector\": null,\n" +
    "          \"connectorGender\": null,\n" +
    "          \"communicationParameters\": null\n" +
    "        },\n" +
    "        \"Anzeige\": {\n" +
    "          \"@class\": \"DisplayComponentType\",\n" +
    "          \"id\": \"7b6ae51f-41b0-43de-a1b0-b90016398124\",\n" +
    "          \"componentTypeId\": \"anzeige/digital\",\n" +
    "          \"description\": \"2-zeiliges Display (lt. MSBG)\",\n" +
    "          \"customFields\": null,\n" +
    "          \"displayKind\": \"DIGITAL_ALPHANUMERISCH\",\n" +
    "          \"displayAccuracy\": {\n" +
    "            \"integerDigits\": 6,\n" +
    "            \"fractionalDigits\": 0,\n" +
    "            \"displayType\": \"DIGITAL_ALPHANUMERISCH\"\n" +
    "          },\n" +
    "          \"displayPosition\": \"VORNE\"\n" +
    "        },\n" +
    "        \"Kommunikationsschnittstelle\": {\n" +
    "          \"@class\": \"Rs232ComInterfaceType\",\n" +
    "          \"id\": \"9f75fcf5-fbea-490d-b35e-aec10d2a8728\",\n" +
    "          \"componentTypeId\": \"RS232\",\n" +
    "          \"description\": \"Einbindung in SMGW per LMN-Adapter nach BSI , RJ10-Stecker\",\n" +
    "          \"customFields\": null,\n" +
    "          \"interfaceUnitPosition\": \"VORNE\",\n" +
    "          \"functions\": [\n" +
    "            \"LMN\"\n" +
    "          ],\n" +
    "          \"protocol\": \"SML\",\n" +
    "          \"connector\": \"MULTI_PIN\",\n" +
    "          \"connectorGender\": null,\n" +
    "          \"communicationParameters\": null,\n" +
    "          \"minBaudRate\": \"BR_2400\",\n" +
    "          \"maxBaudRate\": \"BR_9600\"\n" +
    "        }\n" +
    "      }\n" +
    "    },\n" +
    "    \"articleNr\": \"M010001\",\n" +
    "    \"manufacturer\": {\n" +
    "      \"id\": \"a1a61649-5eaf-3214-9381-e920f9757a18\",\n" +
    "      \"manufacturerId\": \"ISK\",\n" +
    "      \"name\": \"Iskraemeco\",\n" +
    "      \"address\": null\n" +
    "    }\n" +
    "  },\n" +
    "  \"components\": {\n" +
    "    \"Zentraleinheit\": {\n" +
    "      \"@class\": \".centralunit.CentralUnit\",\n" +
    "      \"applicationFirmwareVersion\": null,\n" +
    "      \"osFirmwareVersion\": null,\n" +
    "      \"firmwareVersions\": [],\n" +
    "      \"centralUnitType\": null,\n" +
    "      \"centralSubUnits\": [\n" +
    "        {\n" +
    "          \"@class\": \".SecuritySubUnit\",\n" +
    "          \"pin\": \"8335\",\n" +
    "          \"certificateRef\": null,\n" +
    "          \"cryptoKey\": null,\n" +
    "          \"encryptionType\": null,\n" +
    "          \"publicKey\": \"C6C2648646201EDA478E44C986DCB8236D94DA299E1A1166E5D09872513C4852E60E0D2E9BC45F9BAFFC472220A42E89\",\n" +
    "          \"initialMeterKey\": null,\n" +
    "          \"keys\": null,\n" +
    "          \"firmwareVersion\": null,\n" +
    "          \"securityModuleNumber\": null,\n" +
    "          \"securitySubUnitType\": null\n" +
    "        },\n" +
    "        {\n" +
    "          \"@class\": \".SmartMeterSubUnit\",\n" +
    "          \"firmwareVersion\": \"2.04\",\n" +
    "          \"smartMeterSubUnitType\": null\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    \"Registergruppe\": {\n" +
    "      \"@class\": \".registergroup.RegisterGroup\",\n" +
    "      \"registerGroupType\": null,\n" +
    "      \"registers\": [\n" +
    "        {\n" +
    "          \"registerTask\": {\n" +
    "            \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "            \"externalObis\": null,\n" +
    "            \"billingRelevant\": \"true\",\n" +
    "            \"channel\": \"C0\",\n" +
    "            \"measurand\": \"WIRKLEISTUNG\",\n" +
    "            \"direction\": \"BEZUG\",\n" +
    "            \"measuringMode\": \"INTEGRAL\",\n" +
    "            \"valueMode\": null,\n" +
    "            \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "            \"countingMode\": \"KUMULATIV\",\n" +
    "            \"characteristic\": null,\n" +
    "            \"tariff\": \"T0\",\n" +
    "            \"pushPeriod\": null,\n" +
    "            \"obisRepresentation\": {\n" +
    "              \"values\": [\n" +
    "                1,\n" +
    "                0,\n" +
    "                1,\n" +
    "                8,\n" +
    "                0,\n" +
    "                0\n" +
    "              ],\n" +
    "              \"c\": 1,\n" +
    "              \"d\": 8,\n" +
    "              \"e\": 0,\n" +
    "              \"f\": 0,\n" +
    "              \"a\": 1,\n" +
    "              \"b\": 0\n" +
    "            }\n" +
    "          },\n" +
    "          \"number\": null,\n" +
    "          \"unit\": {\n" +
    "            \"scale\": \"KILO\",\n" +
    "            \"quantity\": \"ACTIVEWORK\"\n" +
    "          },\n" +
    "          \"value\": 7,\n" +
    "          \"timestamp\": \"2018-05-18T00:00:00.000+02:00\",\n" +
    "          \"integerPlaces\": 6,\n" +
    "          \"decimalPlaces\": 0,\n" +
    "          \"factor\": null,\n" +
    "          \"identificationOnDevice\": \"001\",\n" +
    "          \"lightLoadAble\": null,\n" +
    "          \"consumptionType\": null,\n" +
    "          \"consumerInterruptible\": null,\n" +
    "          \"thermalUse\": null\n" +
    "        },\n" +
    "        {\n" +
    "          \"registerTask\": {\n" +
    "            \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "            \"externalObis\": null,\n" +
    "            \"billingRelevant\": \"false\",\n" +
    "            \"channel\": \"C0\",\n" +
    "            \"measurand\": \"WIRKLEISTUNG\",\n" +
    "            \"direction\": \"BEZUG\",\n" +
    "            \"measuringMode\": \"INTEGRAL\",\n" +
    "            \"valueMode\": null,\n" +
    "            \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "            \"countingMode\": \"KUMULATIV\",\n" +
    "            \"characteristic\": null,\n" +
    "            \"tariff\": \"T1\",\n" +
    "            \"pushPeriod\": null,\n" +
    "            \"obisRepresentation\": {\n" +
    "              \"values\": [\n" +
    "                1,\n" +
    "                0,\n" +
    "                1,\n" +
    "                8,\n" +
    "                1,\n" +
    "                0\n" +
    "              ],\n" +
    "              \"c\": 1,\n" +
    "              \"d\": 8,\n" +
    "              \"e\": 1,\n" +
    "              \"f\": 0,\n" +
    "              \"a\": 1,\n" +
    "              \"b\": 0\n" +
    "            }\n" +
    "          },\n" +
    "          \"number\": null,\n" +
    "          \"unit\": {\n" +
    "            \"scale\": \"KILO\",\n" +
    "            \"quantity\": \"ACTIVEWORK\"\n" +
    "          },\n" +
    "          \"value\": 0,\n" +
    "          \"timestamp\": null,\n" +
    "          \"integerPlaces\": 6,\n" +
    "          \"decimalPlaces\": 0,\n" +
    "          \"factor\": null,\n" +
    "          \"identificationOnDevice\": \"T1\",\n" +
    "          \"lightLoadAble\": null,\n" +
    "          \"consumptionType\": null,\n" +
    "          \"consumerInterruptible\": null,\n" +
    "          \"thermalUse\": null\n" +
    "        },\n" +
    "        {\n" +
    "          \"registerTask\": {\n" +
    "            \"@class\": \".semantic.ElectricSemanticRegisterTask\",\n" +
    "            \"externalObis\": null,\n" +
    "            \"billingRelevant\": \"false\",\n" +
    "            \"channel\": \"C0\",\n" +
    "            \"measurand\": \"WIRKLEISTUNG\",\n" +
    "            \"direction\": \"BEZUG\",\n" +
    "            \"measuringMode\": \"INTEGRAL\",\n" +
    "            \"valueMode\": null,\n" +
    "            \"measuringPeriod\": \"INDEFINITELY\",\n" +
    "            \"countingMode\": \"KUMULATIV\",\n" +
    "            \"characteristic\": null,\n" +
    "            \"tariff\": \"T2\",\n" +
    "            \"pushPeriod\": null,\n" +
    "            \"obisRepresentation\": {\n" +
    "              \"values\": [\n" +
    "                1,\n" +
    "                0,\n" +
    "                1,\n" +
    "                8,\n" +
    "                2,\n" +
    "                0\n" +
    "              ],\n" +
    "              \"c\": 1,\n" +
    "              \"d\": 8,\n" +
    "              \"e\": 2,\n" +
    "              \"f\": 0,\n" +
    "              \"a\": 1,\n" +
    "              \"b\": 0\n" +
    "            }\n" +
    "          },\n" +
    "          \"number\": null,\n" +
    "          \"unit\": {\n" +
    "            \"scale\": \"KILO\",\n" +
    "            \"quantity\": \"ACTIVEWORK\"\n" +
    "          },\n" +
    "          \"value\": 0,\n" +
    "          \"timestamp\": null,\n" +
    "          \"integerPlaces\": 6,\n" +
    "          \"decimalPlaces\": 0,\n" +
    "          \"factor\": null,\n" +
    "          \"identificationOnDevice\": \"T2\",\n" +
    "          \"lightLoadAble\": null,\n" +
    "          \"consumptionType\": null,\n" +
    "          \"consumerInterruptible\": null,\n" +
    "          \"thermalUse\": null\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    \"Kommunikationsschnittstelle\": {\n" +
    "      \"@class\": \".interfaceunit.communication.CommunicationInterface\",\n" +
    "      \"smlServerId\": \"090149534B00043C6EEE\",\n" +
    "      \"communicationInterfaceType\": null\n" +
    "    }\n" +
    "  },\n" +
    "  \"verifications\": [\n" +
    "    {\n" +
    "      \"@class\": \".calibration.Calibration\",\n" +
    "      \"brandNumber\": \"CEM181304\",\n" +
    "      \"calibrationNumber\": null,\n" +
    "      \"calibrationDate\": \"2018-04-06T02:00:00.000+02:00\",\n" +
    "      \"calibrationTillYear\": 2026\n" +
    "    }\n" +
    "  ],\n" +
    "  \"reusable\": true,\n" +
    "  \"condition\": null,\n" +
    "  \"conditionCheck\": null,\n" +
    "  \"manufacture\": {\n" +
    "    \"@class\": \".Manufacture\",\n" +
    "    \"serialNumber\": \"71069422\",\n" +
    "    \"productionBatch\": null,\n" +
    "    \"manufactureDate\": \"2018-04-06T02:00:00.000+02:00\",\n" +
    "    \"inspectionType\": null\n" +
    "  },\n" +
    "  \"assembledWithDevice\": null,\n" +
    "  \"parameterizationVersion\": \"202B\",\n" +
    "  \"hardwareVersion\": null,\n" +
    "  \"ownerShipNumber\": \"Leipzig\",\n" +
    "  \"rfid\": null\n" +
    "}";
    
  constructor() { }

  ngOnInit() {
      this.stock = JSON.parse(this.json);
  }

}
