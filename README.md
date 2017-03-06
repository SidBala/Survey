##### Note: Not posting the original question here since you may want to reuse for other candidates

# Priorities
## P0
#### Client side front-end app
The requirements specifically called for a web app which would retrieve a set of questions from an API server and then present them to the user. User then inputs the answers and the app will marshal these answers back into the backend for storage.

#### Mock back-end
Since the input is a hardcoded JSON and the answers need only be in memory, the actual backend-over-network part will be mocked with an in-memory or on-disk backend.

#### Data Models
Build out representations of the question and answer data in a neatly encapsulated manner to allow for easy access and serialization and deserialization. There will be an interface with methods to load and save data from a serialization format. Get properties will allow easy access from view classes. Set properties will allow these models to observe changes, and call validators on data. The models will hold questions and answers in a native state before they are serialized and after they are unserialized from a serialization format (XML or JSON for example)

#### API Interface
Layer of abstraction that will allow for easily swapping out API backends should we migrate. Here, we can build several implementations against an interface. Also, having this in place will allow us to easily swap out prod/staging endpoints, or even transport layers for unit tests for example(where you would use an on-disk backend instead of one over the network). The on-disk backend will be implemented which will hardcode the JSON input and no-op the sendAnswers call(or maybe print to console)

#### UI Components for each Question type
Each question type will have its own encapsulated component with a view, model and controller. They will be instantiated dynamically as per the input question type. Given a model object, a component will construct itself and present a view to the user, injecting specific fields in the model into the view. The component will receive input for these questions and update an answer model. The model then performs validation. Once the question is submitted (or the survey as a whole), the answer models will be queued up for serialization and sent down a transport layer to the backend.

#### Survey Manager
This will be a singleton service that will kick off the survey workflow. It will issue the call to the API to retrieve the questions, and then pass that on to the deser to generate model objects - which are then used to construct the UI components for each question. Once the survey is submitted, the manager will ser the answer data and ship it off to the backend for storage.

## P1
#### Serialization Managers
Refactor out the ser and de-ser functionality out of the models and into serializer classes. This way, data formats can be easily interchanged. JSON, TypedJSON, XML or if you're really pro, something like protobuf.

#### Validators
 Refactor the validation functionality out of the model types. Each validator will accept an answer and then check for validity. If not valid, it will report back to the model, causing the property set to fail. This status should be bubbled up all through the UI to indicate to the user that some correction is needed before the data will be accepted

## P2
#### Nicely designed UI
Maybe a bootstrap theme purchased from wrapbootstrap?

#### Cloud hosted
If I have time, I will be hosting this app on HireSid.com

#### Unit tests
Unit tests for functionality like validators would be nice. Mocha or Jasmine.


# Implementation

#### Front-end framework
The usual suspects are:
- Plain old jQuery
- AngularJS
- ReactJS
- Angular2

I have chosen to use Angular2 + TypeScript. Primarily because I've never done Angular2 or TypeScript before, so this is a good skill-sharpening exercise. But also for the model class hierarchies, strong typing would be very beneficial. Angular2 allows components to be inherited as well, playing well with the question and answer class hierarchies. Interfaces are perfect for defining and loosely coupling the various parts of the system.

However, Angular2 does have its quirks. As a fallback, I will revert to Angular1 - which I have plenty of experience with.

#### Third-Party Libraries

I will keep this part very light to maximize the proportion of code that is entirely written by me in this repo. However, a few base libraries such as Angular need to be used. 

In addition, I will use these libraries:
- MomentJS (for time parsing/validation)

I will use bower to manage the front-end dependencies with strict version pinnning. I am well aware of the deficiencies of using a package manager. However, since this is a timed exercise, I choose to use it for expediency. In a more production-ready product, the dependencies will be checked in since this ensures package versions are consistent. 

Webpack will be used to bundle dependencies.