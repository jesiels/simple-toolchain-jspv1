var googleToUBXProductViewEvent = {};
googleToUBXProductViewEvent.ubxEventType = "ibmproductView";
googleToUBXProductViewEvent.attributesMapper = [];
googleToUBXProductViewEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});

addProductAttributesToMapper(googleToUBXProductViewEvent.attributesMapper);

var googleToUBXAddToCartEvent = {};
googleToUBXAddToCartEvent.ubxEventType = "cartAdd";
googleToUBXAddToCartEvent.attributesMapper = [];
googleToUBXAddToCartEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
googleToUBXAddToCartEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});
addProductAttributesToMapper(googleToUBXAddToCartEvent.attributesMapper);

var googleToUBXRemoveFromCartEvent = {};
googleToUBXRemoveFromCartEvent.ubxEventType = "cartRemove";
googleToUBXRemoveFromCartEvent.attributesMapper = [];
googleToUBXRemoveFromCartEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
addProductAttributesToMapper(googleToUBXRemoveFromCartEvent.attributesMapper);

var googleToUBXCartPurchaseEvent = {};
googleToUBXCartPurchaseEvent.ubxEventType = "ibmcartPurchase";
googleToUBXCartPurchaseEvent.attributesMapper = [];
googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"ti", "ubxName":"orderID","type":"string"});
googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"tr", "ubxName":"orderTotal","type":"number"});
googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"pr<index>qt", "ubxName":"quantity","type":"number"});
googleToUBXCartPurchaseEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});

var googleToUBXCartPurchaseItemEvent = {};
googleToUBXCartPurchaseItemEvent.ubxEventType = "ibmcartPurchaseItem";
googleToUBXCartPurchaseItemEvent.attributesMapper = [];
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"ti", "ubxName":"orderID","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"tr", "ubxName":"orderTotal","type":"number"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"cu", "ubxName":"currency","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>id", "ubxName":"productID","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>nm", "ubxName":"productName","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>ca", "ubxName":"category","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>va", "ubxName":"color","type":"string"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>pr", "ubxName":"basePrice","type":"number"});
googleToUBXCartPurchaseItemEvent.attributesMapper.push({"googleName":"pr<index>qt", "ubxName":"quantity","type":"number"});

var googleToUBXProductReviewEvent = {};
googleToUBXProductReviewEvent.ubxEventType = "wroteReview";
googleToUBXProductReviewEvent.attributesMapper = [];
googleToUBXProductReviewEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
googleToUBXProductReviewEvent.attributesMapper.push({"googleName":"ev", "ubxName":"rating","type":"string"});
addProductAttributesToMapper(googleToUBXProductReviewEvent.attributesMapper);

var googleToUBXProductRatingEvent = {};
googleToUBXProductRatingEvent.ubxEventType = "providedRating";
googleToUBXProductRatingEvent.attributesMapper = [];
googleToUBXProductRatingEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});
googleToUBXProductRatingEvent.attributesMapper.push({"googleName":"ev", "ubxName":"rating","type":"string"});
addProductAttributesToMapper(googleToUBXProductRatingEvent.attributesMapper);

function addProductAttributesToMapper(attributesMapper)
{
    attributesMapper.push({"googleName":"pr1id", "ubxName":"productID","type":"string"});
    attributesMapper.push({"googleName":"pr1nm", "ubxName":"productName","type":"string"});
    attributesMapper.push({"googleName":"pr1ca", "ubxName":"category","type":"string"});
    attributesMapper.push({"googleName":"pr1va", "ubxName":"color","type":"string"});
    attributesMapper.push({"googleName":"pr1pr", "ubxName":"basePrice","type":"number"});
    attributesMapper.push({"googleName":"pr1qt", "ubxName":"quantity","type":"number"});
    attributesMapper.push({"googleName":"dl", "ubxName":"productURL","type":"string"});
}

var googleToUBXVideoEvent = {};
googleToUBXVideoEvent.attributesMapper = [];
googleToUBXVideoEvent.attributesMapper.push({"googleName":"ec", "ubxName":"elementCategory","type":"string"});
googleToUBXVideoEvent.attributesMapper.push({"googleName":"el", "ubxName":"elementId","type":"string"});
googleToUBXVideoEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});

var googleToUBXVideoLaunchedEvent = JSON.parse(JSON.stringify(googleToUBXVideoEvent));
googleToUBXVideoLaunchedEvent.ubxEventType = "ibmelementVideoLaunched";

var googleToUBXVideoPausedEvent = JSON.parse(JSON.stringify(googleToUBXVideoEvent));
googleToUBXVideoPausedEvent.ubxEventType = "ibmelementVideoPaused";

var googleToUBXVideoPlayedEvent = JSON.parse(JSON.stringify(googleToUBXVideoEvent));
googleToUBXVideoPlayedEvent.ubxEventType = "ibmelementVideoPlayed";

var googleToUBXVideoCompletedEvent = JSON.parse(JSON.stringify(googleToUBXVideoEvent));
googleToUBXVideoCompletedEvent.ubxEventType = "ibmelementVideoCompleted";

var googleToUBXFormErrorEvent = {};
googleToUBXFormErrorEvent.ubxEventType = "ibmelementFormError";
googleToUBXFormErrorEvent.attributesMapper = [];
googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"ec", "ubxName":"elementCategory","type":"string"});
googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"el", "ubxName":"elementId","type":"string"});
googleToUBXFormErrorEvent.attributesMapper.push({"googleName":"cid", "ubxName":"interactionId","type":"string"});

google_ubx = {};

//change this to false if you do not want to send individual item purchase event when cart purchase event is sent
google_ubx.sendIndividualItemPurchaseEventWithCartPurchaseEvent = true;

google_ubx.sendEventFromPayload=function(payload, identifiersMapper, ubxEventType, attributesMapper)
{
    if(!payload)
    {
        console.log("Payload is missing");
        return;
    }

    if(!identifiersMapper)
    {
        console.log("Identifier mapper is missing");
        return;
    }

    
    console.log("Identifier mapper: " + JSON.stringify(identifiersMapper));
	console.log("Attributes Mapper: " + JSON.stringify(attributesMapper));)
    var query = payload;
    var result = {};
    query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });

    google_ubx.sendEventFromJSONPayload(result, identifiersMapper, ubxEventType, attributesMapper);
};

google_ubx.sendEventFromJSONPayload=function(payloadJson, identifiersMapper, ubxEventType, attributesMapper)
{
    if(!payloadJson)
    {
        console.log("Payload is missing");
        return;
    }

    if(!identifiersMapper)
    {
        console.log("Identifier mapper is missing");
        return;
    }

    //console.log("Payload JSON: " + JSON.stringify(payloadJson));

    var eventMapper;
    if(attributesMapper) {
        if(!ubxEventType)
        {
            console.log("Event type is missing");
            return;
        }
        
        eventMapper = google_ubx.createEventMapper(ubxEventType, identifiersMapper, attributesMapper);
    }
    else {
        var eventType;
        if(ubxEventType)
        {
            eventType = ubxEventType;
        }
        else if(payloadJson.hasOwnProperty('pa'))
        {
            eventType = payloadJson['pa'];
        }
        else if("event" === payloadJson['t'])
        {
            eventType = payloadJson['ea'];
        }

        if(eventType) {
            switch (eventType) {
                case "ibmproductView":
                case "detail":
                    eventMapper = googleToUBXProductViewEvent;
                    break;
                case "cartAdd":
                case "add":
                    eventMapper = googleToUBXAddToCartEvent;
                    break;
                case "cartRemove":
                case "remove":
                    eventMapper = googleToUBXRemoveFromCartEvent;
                    break;
                case "ibmcartPurchase":
                case "purchase":
                    eventMapper = googleToUBXCartPurchaseEvent;
                    break;
                case "wroteReview":
                case "review":
                    eventMapper = googleToUBXProductReviewEvent;
                    break;
                case "providedRating":
                case "rate":
                    eventMapper = googleToUBXProductRatingEvent;
                    break;
                case "ibmelementvideoLaunched":
                case "videoLaunched":
                    eventMapper = googleToUBXVideoLaunchedEvent;
                    break;
                case "ibmelementvideoPlayed":
                case "videoPlayed":
                    eventMapper = googleToUBXVideoPlayedEvent;
                    break;
                case "ibmelementvideoPaused":
                case "videoPaused":
                    eventMapper = googleToUBXVideoPausedEvent;
                    break;
                case "ibmelementvideoCompleted":
                case "videoCompleted":
                    eventMapper = googleToUBXVideoCompletedEvent;
                    break;
                case "ibmelementFormError":
                case "formError":
                    eventMapper = googleToUBXFormErrorEvent;
                    break;
                default:
                    console.log("UBX event type " +eventType+ " not recognized.");
                    break;
            }
        }
        else {
            console.log("No UBX event type could be mapped from the payload data.");
            return;
        }
    }

    if(eventMapper)
    {
        eventMapper.identifiersMapper = identifiersMapper;

        var eventObj = google_ubx.mapToUBXEvent(payloadJson, eventMapper);
        if("ibmcartPurchase" === eventMapper["ubxEventType"] && google_ubx.sendIndividualItemPurchaseEventWithCartPurchaseEvent) {
            var eventList = [];
            eventList.push(eventObj);
            for (var i = 1;; i++)
            {
                if(payloadJson.hasOwnProperty('pr' + i + 'id') || payloadJson.hasOwnProperty('pr' + i + 'nm'))
                {
                    var productItemObj = {};
                    var productItemMapper = JSON.parse(JSON.stringify(googleToUBXCartPurchaseItemEvent));
                    for(var j = 0; j < productItemMapper.attributesMapper.length; j++)
                    {
                        var googleName = productItemMapper.attributesMapper[j].googleName;
                        productItemMapper.attributesMapper[j].googleName = googleName.replace("<index>", i);
                    }
                    var eventItemObj = google_ubx.mapToUBXEvent(payloadJson, productItemMapper);
                    eventList.push(eventItemObj);
                }
                else
                    break;
            }
            console.log("Sending events to UBX: " + JSON.stringify(eventList));
            ibm_ubx.sendEvents(eventList);
        }
        else {
            console.log("Sending event to UBX: " + JSON.stringify(eventObj));
            ibm_ubx.sendEvent(eventObj);
        }
    }
    else {
        console.log("No mapper found to map payload data to UBX event.");
    }
};

google_ubx.mapToUBXEvent=function(payloadJson, googleUBXEventMapperObj)
{
    var eventObj = {};
    eventObj.eventCode = googleUBXEventMapperObj.ubxEventType;
    eventObj.identifiers = google_ubx.createFieldArrayObject(payloadJson, googleUBXEventMapperObj.identifiersMapper);
    eventObj.attributes = google_ubx.createFieldArrayObject(payloadJson, googleUBXEventMapperObj.attributesMapper);
    return eventObj;
};

google_ubx.createFieldArrayObject=function(jsonObj, fieldMapper)
{
    var arr = [];
    for(var i = 0; i < fieldMapper.length; i++)
    {
        var fieldName = fieldMapper[i].name;
        var fieldValue = fieldMapper[i].value;
        if(fieldName && fieldValue)
        {
            arr.push(google_ubx.createNameValueTypeObject(fieldName, fieldValue, fieldMapper[i].type));
        }
        else {
            var googleName = fieldMapper[i].googleName;
            var ubxName = fieldMapper[i].ubxName;
            var type = fieldMapper[i].type;

            if (ubxName === 'quantity' && googleName === "pr<index>qt") {
                var totalItemQuantity = 0;
                for (var j = 1; ; j++) {
                    if (jsonObj.hasOwnProperty('pr' + j + 'qt')) {
                        totalItemQuantity = totalItemQuantity + parseInt(jsonObj['pr' + j + 'qt']);
                    }
                    else
                        break;
                }

                arr.push(google_ubx.createNameValueTypeObject(ubxName, totalItemQuantity, type));
            }
            else if (jsonObj.hasOwnProperty(googleName)) {
                arr.push(google_ubx.createNameValueTypeObject(ubxName, jsonObj[googleName], type));
            }
        }
    }

    return arr;
};

google_ubx.createNameValueTypeObject=function(name, value, type)
{
    var obj = {};
    obj.name=name;
    obj.value=value;
    if(type)
    {
        obj.type=type;
    }
    return obj;
};

google_ubx.createEventMapper=function(ubxEventType, identifiersMapper, attributesMapper)
{
    var eventMapper = {};
    eventMapper.ubxEventType = ubxEventType;
    eventMapper.identifiersMapper = identifiersMapper;
    eventMapper.attributesMapper = attributesMapper;
    return eventMapper;
};