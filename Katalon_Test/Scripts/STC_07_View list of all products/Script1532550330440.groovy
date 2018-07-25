import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:3000/')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Mhadum.jpg?alt=media&token=57e461a3-2c33-4d9b-a7ee-e2fda0576b7f', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Mhadum SanPaTong'), 'Mhadum SanPaTong')

WebUI.verifyElementText(findTestObject('STC_01/div_Mhadum SanPaTong is a dog'), 'Mhadum SanPaTong is a dog meat that very famous in SanPaTong district ChiangMai.')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 1200 THB'), 'Price: 1200 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item_1'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/thai%20whisky.jpg?alt=media&token=98b80a5d-115a-44ca-a8bc-1bfa2e554a03', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Original Thai whisky by Lung'), 'Original Thai whisky by Lung Som')

WebUI.verifyElementText(findTestObject('STC_01/div_This is popular whisky in'), 'This is popular whisky in Thailand and very cheap price')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 60 THB'), 'Price: 60 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item_2'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Larb%20Bunger.jpg?alt=media&token=ea703452-2786-4992-aa46-614c46f16217', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Larb Bunger with a lot of Ch'), 'Larb Bunger with a lot of Churod')

WebUI.verifyElementText(findTestObject('STC_01/div_Street food in Chaing Mai.'), 'Street food in Chaing Mai. Most people go to there.')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 20 THB'), 'Price: 20 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item_3'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Moh%20hom.jpg?alt=media&token=d573e556-78e4-486d-993a-ac0dc397e21d', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Moh Hom Shirt'), 'Moh Hom Shirt')

WebUI.verifyElementText(findTestObject('STC_01/div_A local shirt made from na'), 'A local shirt made from natural process with unique blue color.')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 260 THB'), 'Price: 260 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item_4'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Sai%20Ua.jpg?alt=media&token=093f454e-a3d5-45e0-ab5e-34be32e53933', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Sai Ua Mhoo'), 'Sai Ua Mhoo')

WebUI.verifyElementText(findTestObject('STC_01/div_A pork sausages made with'), 'A pork sausages made with natural herb and pork')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 99 THB'), 'Price: 99 THB')

WebUI.verifyElementAttributeValue(findTestObject('STC_01/img_product-item_5'), 'src', 'https://firebasestorage.googleapis.com/v0/b/signature-database.appspot.com/o/Cap%20Mhu.jpg?alt=media&token=ae2d623b-9504-40c9-8036-c310acaf6b7d', 
    0)

WebUI.verifyElementText(findTestObject('STC_01/b_Cab Mhoo'), 'Cab Mhoo')

WebUI.verifyElementText(findTestObject('STC_01/div_A pork snack made by pork'), 'A pork snack made by pork skin and crispy fried')

WebUI.verifyElementText(findTestObject('STC_01/b_Price 100 THB'), 'Price: 100 THB')

WebUI.closeBrowser()

